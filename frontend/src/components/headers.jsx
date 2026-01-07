import LogoWrap from "../utilities/logoWrap"
import oasisLogo from "../assets/oasisLogo.png"
import userIcon from "../assets/userIcon.png"
import { Link } from "react-router-dom"
import NavItem from "./navItem"
import HoverLift from "./hoverLift"
import clock from "../assets/icons/clock.png"
import settings from "../assets/icons/settings.png"
import user from "../assets/icons/user.png"

import { useState, useEffect } from "react"

export function Header() {
    return (
        <>
            <header className="sticky top-0 w-full flex flex-row bg-linear-to-t justify-between items-center from-oasis-blue  via-oasis-blue to-oasis-dark min-h-15 pl-5 pr-5 shadow-[0_5px_10px_rgba(0,0,0,0.3)] z-50">
                <LogoWrap />
                <Link to="/landing"><img src={oasisLogo} className="w-20 aspect-auto hover:cursor-pointer"></img></Link>
                <Link to="/access"><img src={userIcon} className="w-8 h-8 hover:cursor-pointer"></img></Link>
            </header>
            
        </>
    )
}

export function AdminHeader() {

    const [time, setTime] = useState('');

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                })
            );
        }, 1000);

        return () => clearInterval(interval);

    }, [])

    return (
        <>
            <div className="w-[90%] p-5 flex flex-row items-center justify-between font-oasis-text text-[0.8rem] sticky top-0">

                <div className="bg-admin-header-bg p-3 rounded-4xl min-w-28 flex flex-wrap flex-row justify-center items-center gap-3">
                    <p className="">{time}</p>
                    <img src={clock} className="w-[1.2rem]"/>
                </div>

                <div className="bg-admin-header-bg p-1 rounded-4xl w-fit min-h-14 max-h-14 flex flex-row justify-between items-center">
                    <ul className="w-full p-3 flex flex-row justify-center items-center gap-15">
                        <NavItem to="/admin" label="Dashboard" />
                        <NavItem to="/admoperations" label="Operations" />
                        <NavItem to="/admMoaOverview" label="MOA Overview" />
                        <NavItem to="/admUploads" label="Document Upload" />
                        <NavItem to="/admStudents" label="Students" />
                    </ul>

                </div>

                <div className="bg-admin-header-bg p-3 rounded-4xl w-fit flex flex-row justify-between items-center gap-5">
                    <HoverLift>
                        <img src={settings} className="w-[1.2rem]" />
                    </HoverLift>

                    <HoverLift>
                        <img src={user} className="w-[1.2rem]" />
                    </HoverLift>
                </div>
            </div>
        </>
    )
}
