import 'animate.css';
import { useState } from 'react';
import HoverLift from './hoverLift';
export function Button({ text, onClick, disabled, width = "w-auto" }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`animate__animated animate__fadeIn min-w-70 ${width} p-3 bg-linear-to-t from-oasis-button-dark to-oasis-button-light font-oasis-text text-white font-semibold hover:from-oasis-button-light hover:to-oasis-aqua ease-in duration-100 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            {text}
        </button>
    );
}

export function AnnounceButton({ type="button", btnText = "Posted", onClick }) {
    const text = btnText.toLowerCase();

    const isDanger = ["delete", "reject", "clear all"].includes(text);
    const isNeutral = ["cancel", "clear"].includes(text);
    
    const buttonStyle = isNeutral
        ? "bg-[#D3D3D3] hover:bg-[#A9A9A9] text-black"
        : isDanger
        ? "bg-red-900 hover:bg-red-700 text-white"
        : "bg-oasis-button-dark hover:bg-oasis-button-light text-white";

    return (
        <button
            type={type}
            onClick={onClick}
            className={` font-oasis-text text-[0.8rem] text-center py-2 px-8 w-auto max-w-50 rounded-3xl transition-all duration-200 hover:cursor-pointer ${buttonStyle} `}
        >
            {btnText}
        </button>
    );
}


export function CoursesButton({ onClick, text, type = "button"}) {

    return (
        <>
        <HoverLift>
            <button type={type} onClick={onClick} className='rounded-3xl border bg-white text-black font-bold font-oasis-text text-[0.8rem] px-4 py-2 hover:bg-oasis-aqua hover:cursor-pointer hover:border-transparent hover:drop-shadow-[0px_5px_2px_rgba(0,0,0,0.5)] transition duration-100 ease-out'>{text}</button>
        </HoverLift>
            
        </>
    )
}

import add from "../assets/icons/add.png";

export function AddButton({ onClick, type = "button", width = "w-25", height = "h-10", iconSize = "w-5 h-5" }) {
    return (
        <button type={type} onClick={onClick} className={`${width} ${height} rounded-full bg-oasis-button-light flex items-center justify-center hover:bg-oasis-button-dark hover:cursor-pointer transition`}>
            
            <img src={add} alt="Add" className={`${iconSize} object-contain`}/>

        </button>
    );
}
