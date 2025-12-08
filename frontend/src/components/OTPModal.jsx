import React, {useState} from "react";
import http from "../api/http";

export default function OTPModal({email,password,firstName,lastName,onClose}){
  const [otp,setOtp]=useState("");

  const submit = async () => {
    try {
      await http.post("/auth/verify-otp", {email, otp, password, first_name:firstName, last_name:lastName});
      alert("Registration complete. Please login.");
      onClose();
    } catch(err){
      alert(err.response?.data?.msg || "OTP error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        <h3 className="font-bold mb-2">Enter OTP</h3>
        <input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="6-digit code" className="mb-2 p-2 border rounded"/>
        <div className="flex gap-2">
          <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">Verify</button>
          <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}