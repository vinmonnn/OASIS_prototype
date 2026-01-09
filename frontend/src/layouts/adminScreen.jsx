import { Header } from '../components/headers'
import Footer from '../components/footer'

export default function AdminScreen({ children }) {
    return(
        <>
            <div className='w-full h-full pb-5 bg-[#F4FCF8] flex flex-col justify-center items-center gap-10 overflow-x-hidden overflow-y-auto'>
                <Header /> 
                    <div className='mt-5'></div>
                    {children}
                    <div className='mt-100 h-dvh w-dvh'></div>
                <Footer />
            </div>
        </>
    )
}