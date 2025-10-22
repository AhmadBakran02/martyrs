import { apiUrl } from "@/config/apiUrl";
import { Massacre } from "./massacreApi";

export interface GetMassacreResponse {
  success: boolean;
  message: string;
  data: {
    massacre: Massacre;
    numberOfMartyrs: number;
  };
}

/**
 * Fetch a single massacre by its ID
 * @param id - The massacre ID
 * @returns GetMassacreResponse
 */
export async function getMassacreById(
  id: string
): Promise<GetMassacreResponse> {
  try {
    const res = await fetch(`${apiUrl}/api/massacre/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch massacre: ${res.status}`);
    }

    const data = (await res.json()) as GetMassacreResponse;
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Error fetching martyr");
  }
}
