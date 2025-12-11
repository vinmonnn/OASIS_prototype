import 'animate.css'
export default function Button({ text, type }) {
    return (
        <>
            <button className={`animate__animated animate__fadeIn min-w-70 p-3 bg-linear-to-t from-oasis-button-dark to-oasis-button-light font-oasis-text text-white font-semibold hover:from-oasis-button-light hover:to-oasis-aqua ease-in duration-100 hover:cursor-pointer`}>{text}</button>
        </>
    )
}