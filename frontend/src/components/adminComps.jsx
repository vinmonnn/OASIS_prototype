import { useState } from "react";
import { Label } from "../utilities/label";

export function Container({ children }) {
    return (
        <>
            <div className='w-[90%] p-5 rounded-3xl bg-oasis-blue flex flex-col justify-between items-start shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'>
                {children}
            </div>
        </>
    )
}
export function Filter({ text }) {
    return (
        <>
            <div className="p-3 bg-oasis-button-dark font-oasis-text font-medium text-white text-[0.7rem] rounded-3xl cursor-pointer hover:bg-oasis-aqua hover:translate-y-[-10%] ease-in-out transition duration-300">{text}</div>
        </>
    );
}   

export function Dropdown({ labelText, fieldId, categories = []}) {

    const [selected, setSelected] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value);
    }
    return (
        <>
            <Label labelText={labelText} fieldId={fieldId}/>
                <select id={fieldId} value={selected} onChange={handleChange} className="w-full p-3 bg-white rounded-2xl rounded-tl-none text-[0.8rem] font-oasis-text">
                    <option>Select category</option>
                    {categories.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                    
                </select>
        
                
           
            
        </>
    )
}