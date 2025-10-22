import { apiUrl } from "@/config/apiUrl";
import { GetMartyr } from "./martyrApi";

export interface GetMartyrResponse {
  success: boolean;
  message: string;
  data: {
    martyr: GetMartyr;
    numberOfMartyrs: number;
  };
}

/**
 * Fetch a single martyr by its ID
 * @param id - The martyr ID
 * @returns GetMartyrResponse
 */
export async function getMartyrById(id: string): Promise<GetMartyrResponse> {
  try {
    const res = await fetch(`${apiUrl}/api/martyr/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch martyr: ${res.status}`);
    }

    const data = (await res.json()) as GetMartyrResponse;
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Error fetching martyr");
  }
}
