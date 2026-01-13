import oasisLogo from '../assets/oasisLogo.png'

export default function LogoModal() {


    return (
        <>
            <div className={`animate__animated animate__fadeIn w-100 bg-linear-to-t from-oasis-aqua via-white to-white rounded-[10px] drop-shadow-[10px_10px_5px_rgba(0,0,0,0.3)] z-20 duration-500 ease-in-out`}>
                <img src={oasisLogo}></img>
            </div>
        </>
    )
}
