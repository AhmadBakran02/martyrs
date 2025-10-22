// import { refreshAccessTokenApi } from "@/lib/auth";
// import { getAccessToken, getRefreshToken, logout } from "@/lib/auth";
// import { apiUrl } from "@/config/apiUrl";

// export async function apiFetch(
//   path: string,
//   options: RequestInit = {}
// ): Promise<any> {
//   const token = getAccessToken();
//   const headers = {
//     "Content-Type": "application/json",
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//     ...options.headers,
//   };

//   const res = await fetch(`${apiUrl}${path}`, { ...options, headers });

//   // if token expired, try refresh
//   if (res.status === 401 && getRefreshToken()) {
//     const newAccess = await refreshAccessTokenApi();
//     if (newAccess) {
//       // retry request
//       const retryHeaders = {
//         ...headers,
//         Authorization: `Bearer ${newAccess}`,
//       };
//       const retryRes = await fetch(`${apiUrl}${path}`, {
//         ...options,
//         headers: retryHeaders,
//       });
//       return retryRes.json();
//     } else {
//       logout();
//       throw new Error("Session expired");
//     }
//   }

//   return res.json();
// }
