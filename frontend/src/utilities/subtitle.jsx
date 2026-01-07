
export default function Subtitle({ text, color }) {
    return (
        <>
            <p className={`animate__animated animate__fadeInDown font-oasis-text font-normal text-xs text-center ${color}`}>{text}</p>
        </>
    )
}