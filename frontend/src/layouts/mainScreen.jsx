import '../styles.css'

export default function MainScreen({ children }) {
    return(
        <>
            <div className='w-full pb-5 bg-white'>
                {children}
            </div>
        </>
    )
}