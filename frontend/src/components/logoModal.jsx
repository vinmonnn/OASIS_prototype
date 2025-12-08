import '../styles.css'
import oasisLogo from '../assets/oasisLogo.png'

export default function LogoModal() {
    return (
        <>
            <div className='w-100 absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] bg-linear-to-t from-oasis-aqua via-white to-white rounded-[10px] drop-shadow-[10px_10px_5px_rgba(0,0,0,0.3)] z-20'>
                <img src={oasisLogo}></img>
            </div>
        </>
    )
}