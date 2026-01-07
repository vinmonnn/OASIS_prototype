import { useState } from "react";
import { Label } from "../utilities/label";

export function Filter({ text }) {
    return (
        <>
            <div className="p-3 bg-oasis-button-dark font-oasis-text font-medium text-white text-[0.7rem] rounded-3xl cursor-pointer hover:bg-oasis-aqua hover:translate-y-[-10%] ease-in-out transition duration-300">{text}</div>
        </>
    );
}   

export function Dropdown({ labelText, fieldId}) {

    const [selected, setSelected] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value);
    }
    return (
        <>
            <Label labelText={labelText} fieldId={fieldId}/>
                <select id={fieldId} value={selected} onChange={handleChange} className="w-full p-3 bg-white rounded-2xl rounded-tl-none text-[0.8rem]">
                    <option>Select category</option>
                    <option>HTE-Related</option>
                    <option>Deadlines</option>
                    <option>Newly Approved HTEs</option>
                    <option>Events and Webinars</option>
                </select>
        
                
           
            
        </>
    )
}