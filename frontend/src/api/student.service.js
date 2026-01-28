import axios from "./axios";

/**
 * GET: Student Dashboard HTEs
 * Endpoint: /api/student/dashboard/htes
 */
export async function getDashboardHtes() {
    const token = localStorage.getItem("access_token");

    if (!token) {
        throw new Error("No access token found");
    }

    const res = await axios.get(
        "/api/student/dashboard/htes",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data.htes;
}