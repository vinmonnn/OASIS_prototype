import { Header } from '../components/headers'
import Footer from '../components/footer'
import ctaBg from "../assets/ctaBg.png"

export default function AdminScreen({ children }) {
    return(
        <>
            <div className={`w-full h-full pb-5 bg-[url("../assets/ctaBg.png")] bg-[#F4FCF8] bg-blend-multiply bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10 overflow-x-hidden overflow-y-auto`}>
            <div className="absolute inset-0 bg-[url('../assets/ctaBg.png')] bg-center bg-cover opacity-10 pointer-events-none"
            />
                <Header /> 
                    <div className='mt-5'></div>
                        {children}
                    <div className='mt-100 h-dvh w-dvh'></div>
                <Footer />
            </div>
        </>
    )
}