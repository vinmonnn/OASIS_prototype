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

    const res = await axios.get("/api/student/dashboard/htes", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data.htes;
}

/* ==============================
   HTE DIRECTORY (STUDENT)
================================ */

export async function fetchHTEs(params = {}) {
    const token = localStorage.getItem("access_token");

    const res = await axios.get("/api/student/htes", {
        params,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data.htes;
}

export async function fetchHTEDetail(hteId) {
    const token = localStorage.getItem("access_token");

    const res = await axios.get(`/api/student/htes/${hteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}

export function downloadMOA(hteId) {
    const token = localStorage.getItem("access_token");

    return axios.get(`/api/student/htes/${hteId}/moa`, {
        responseType: "blob",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
