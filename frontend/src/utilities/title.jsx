import '../styles.css'

export default function Title({ text }) {
    return (
        <>
            <h2 className='font-oasis-text font-semibold text-2xl bg-clip-text text-transparent bg-linear-to-t from-oasis-button-light to-oasis-button-dark text-center'>{text}</h2>
        </>
    )
}