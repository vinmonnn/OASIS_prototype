import LogoModal from "../components/logoModal"

export default function LogregScreen({ children }) {
    return(
        <>
            <div className='w-full h-dvh bg-linear-to-l from-oasis-dark via-oasis-blue to-white flex flex-col justify-center items-start p-50'>
                <LogoModal/>
                {children}
            </div>
        </>
    )
}