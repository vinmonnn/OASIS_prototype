import React, {useState} from "react";
import http from "../api/http";
import OTPModal from "../components/OTPModal";

export default function Register(){
  const [email,setEmail]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [showOTP,setShowOTP]=useState(false);
  const [password,setPassword]=useState("");

  const handleStart = async (e) => {
    e.preventDefault();
    try {
      await http.post("/auth/register", {email, first_name:firstName, last_name:lastName});
      setShowOTP(true);
    } catch(err){
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-96 p-6 bg-white rounded shadow" onSubmit={handleStart}>
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder="First name" className="w-full mb-2 p-2 border rounded" />
        <input value={lastName} onChange={e=>setLastName(e.target.value)} placeholder="Last name" className="w-full mb-2 p-2 border rounded" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="PUP webmail" className="w-full mb-2 p-2 border rounded" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full py-2 bg-blue-600 text-white rounded">Send OTP</button>
      </form>

      {showOTP && <OTPModal email={email} password={password} firstName={firstName} lastName={lastName} onClose={()=>setShowOTP(false)} />}
    </div>
  );
}