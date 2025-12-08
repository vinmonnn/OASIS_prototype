import React, {useEffect, useState} from "react";
import http from "../api/http";

export default function HTEList(){
  const [htes,setHtes] = useState([]);
  const [q,setQ] = useState("");

  useEffect(()=>{
    fetchList();
  },[]);

  async function fetchList(){
    const res = await http.get("/api/htes", { params: { q }});
    setHtes(res.data);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Host Training Establishments</h1>
      <div className="mb-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" className="p-2 border rounded mr-2"/>
        <button onClick={fetchList} className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {htes.map(h=>(
          <div key={h.id} className="p-4 border rounded">
            <h3 className="font-bold">{h.name}</h3>
            <p className="text-sm">{h.industry}</p>
            <p className="text-sm">{h.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}