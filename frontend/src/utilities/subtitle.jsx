
export default function Subtitle({  isCenter = false , text, color, size = ('text-xs'), weight = ('font-normal'), isUnderlined = false }) {

    return (
        <>
            <p className={`animate__animated animate__fadeInDown font-oasis-text ${weight} ${isCenter ? "text-center" : "text-start"} ${size} text-center ${color} transition ease-in-out ${isUnderlined ? "underline underline-offset-2": ""}`}>{text}</p>
        </>
    )
}