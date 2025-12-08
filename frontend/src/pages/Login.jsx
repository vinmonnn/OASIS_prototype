import React, {useState, useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login(){
  const {login} = useContext(AuthContext);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email,password);
      window.location.href = "/htes";
    } catch(err){
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={submit} className="p-6 bg-white rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input onChange={e=>setEmail(e.target.value)} value={email} className="w-full mb-2 p-2 border rounded" placeholder="PUP webmail" />
        <input onChange={e=>setPassword(e.target.value)} value={password} type="password" className="w-full mb-4 p-2 border rounded" placeholder="Password" />
        <button className="w-full py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  );
}