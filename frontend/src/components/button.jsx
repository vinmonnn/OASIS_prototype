
export default function Button({ text }) {
    return (
        <>
            <button className='min-w-70 p-3 bg-linear-to-t from-oasis-button-dark to-oasis-button-light font-oasis-text text-white font-semibold hover:from-oasis-button-light hover:to-oasis-aqua ease-in duration-100 hover:cursor-pointer'>{text}</button>
        </>
    )
}