import oasisLogo from '../assets/oasisLogo.png'

export default function LogoModalLeft({ position = "left"}) {

    const modalPos = 
        position === "left" ? "translate-x-[-50%]" : "translate-x-[90%]"
    return (
        <>
            <div className={`animate__animated animate__fadeIn w-100 absolute top-[50%] left-[30%]
                ${modalPos} translate-y-[-50%] bg-linear-to-t from-oasis-aqua via-white to-white rounded-[10px] drop-shadow-[10px_10px_5px_rgba(0,0,0,0.3)] z-20 duration-500 ease-in-out`}>
                <img src={oasisLogo}></img>
            </div>
        </>
    )
}
