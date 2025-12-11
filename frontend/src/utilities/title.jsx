import 'animate.css'

export default function Title({ text }) {
    return (
        <>
            <h2 className='animate__animated animate__fadeInDown font-oasis-text font-semibold text-2xl bg-clip-text text-transparent bg-linear-to-t from-oasis-button-light to-oasis-button-dark text-center'>{text}</h2>
        </>
    )
}