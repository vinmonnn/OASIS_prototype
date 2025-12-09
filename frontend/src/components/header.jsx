import LogoWrap from "../utilities/logoWrap"
import oasisLogo from "../assets/oasisLogo.png"
import userIcon from "../assets/userIcon.png"
import { Link } from "react-router-dom"

export default function Header() {
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