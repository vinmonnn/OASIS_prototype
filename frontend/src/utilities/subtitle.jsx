
export default function Subtitle({ text, color, size = ('text-xs'), weight = ('font-normal'), isUnderlined = false }) {

    return (
        <>
            <p className={`animate__animated animate__fadeInDown font-oasis-text ${weight} text-center ${size} text-center ${color} transition ease-in-out ${isUnderlined ? "underline underline-offset-2": ""}`}>{text}</p>
        </>
    )
}