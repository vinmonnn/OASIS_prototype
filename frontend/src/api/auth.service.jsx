// src/api/auth.service.jsx
import axios from "./axios";

export const sendOtp = (email) => {
    console.log("Mock send OTP to:", email);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    message: "OTP sent",
                    otp: "123456" // mock OTP
                }
            });
        }, 800);
    });
};

export const verifyOtp = (email, otp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (otp === "123456") {
                resolve({ data: { message: "OTP verified" } });
            } else {
                reject(new Error("Invalid OTP"));
            }
        }, 800);
    });
};

// export const sendOtp = (email) => {
//     return axios.post("/send-otp", { email });
// };

// export const verifyOtp = (email, otp) => {
//     return axios.post("/verify-otp", { email, otp });
// };

// export const registerUser = (email, password) => {
//     return axios.post("/register", { email, password });
// };

// export const loginUser = (email, password) => {
//     return axios.post("/login", { email, password });
// };
