import React, {useState} from "react";
import http from "../api/http";

export default function ChatWidget(){
  const [open,setOpen]=useState(false);
  const [messages,setMessages]=useState([]);
  const [text,setText]=useState("");

  async function send(){
    if(!text) return;
    const userMsg = {sender:"user", text};
    setMessages(m=>[...m, userMsg]);
    setText("");
    const res = await http.post("/chat", {message: userMsg.text});
    setMessages(m=>[...m, {sender:"orbi", text: res.data.reply}]);
  }

  return (
    <div className="fixed bottom-6 right-6">
      {open && (
        <div className="w-80 h-96 bg-white border rounded shadow flex flex-col">
          <div className="p-2 border-b">ORBI — OJT Bot</div>
          <div className="p-2 flex-1 overflow-auto">
            {messages.map((m,i)=>(<div key={i} className={m.sender==="user"?"text-right":"text-left"}>{m.text}</div>))}
          </div>
          <div className="p-2 border-t">
            <input value={text} onChange={e=>setText(e.target.value)} className="w-full p-2 border rounded" placeholder="Ask ORBI..." />
            <button onClick={send} className="mt-2 w-full bg-blue-600 text-white p-2 rounded">Send</button>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(!open)} className="bg-blue-600 text-white p-3 rounded-full">Chat</button>
    </div>
  );
}