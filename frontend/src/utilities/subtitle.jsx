
export default function Subtitle({ text, color, size = ('text-xs'), weight = ('font-normal') }) {
    return (
        <>
            <p className={`animate__animated animate__fadeInDown font-oasis-text ${weight} text-center ${size} text-center ${color}`}>{text}</p>
        </>
    )
}