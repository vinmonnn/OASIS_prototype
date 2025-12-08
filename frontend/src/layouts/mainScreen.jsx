import '../styles.css'

export default function MainScreen({ children }) {
    return(
        <>
            <div className='w-full h-full pb-5 bg-[#F4FCF8] flex flex-col justify-center items-center'>
                {children}
            </div>
        </>
    )
}