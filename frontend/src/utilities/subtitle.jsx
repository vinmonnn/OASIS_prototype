
export default function Subtitle({ text, color, size = ('text-xs') }) {
    return (
        <>
            <p className={`animate__animated animate__fadeInDown font-oasis-text font-normal text-xs text-center ${size}text-center ${color}`}>{text}</p>
        </>
    )
}