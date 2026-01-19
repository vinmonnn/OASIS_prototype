import { AnnounceButton } from "../components/button";
import Subtitle from "./subtitle"

export function Text({ text }) {
    return(
        <>
        {/* Just texts for the table, not customizable */}
            <p className="font-oasis-text text-[1rem] truncate">{text}</p>
        </>      
    )
}

export function DateTime({ date, time}) {
    return(
        <>
            {/* optional, dont put anything for now*/}
            <div className="">
                <Subtitle text={date}/>
                <Subtitle text={time}/>
            </div>
        </>      
    )
}

export function SignedExpiryDate({ signedDate }) {

    const signed = new Date(signedDate);
    const expiry = new Date(signed);
    expiry.setFullYear(expiry.getFullYear() + 3)

    return(
        <>
            {/* for MOAs signed date to expiry date, the moa sign lasts for 3 years */}
            <div>
                <Subtitle text={`Signed: ${signed.toLocaleDateString()}`}/>
                <Subtitle text={`Expires in: ${expiry.toLocaleDateString()}`}/>
            </div>

        </>      
    )
}

export function StatusDropdown({ value, onChange}) {
    return(
        <>
            {/* Status: Active, Pending, Expired, Rejected*/}
            <select value={value} onChange={e => onChange(e.target.value)} className="border rounded p-2 text-[0.8rem]">
                <option><Subtitle text={"Active"}/></option>
                <option><Subtitle text={"Pending"}/></option>
                <option><Subtitle text={"Expired"}/></option>
                <option><Subtitle text={"Rejected"}/></option>
            </select>
        </>      
    )
}

export function ActionButtons({ onEdit, onArchive, onDelete}) {
    return(
        <>
            {/* Actions, these are icons with Edit, Archive, Delete. */}
            <div className="flex justify-center gap-3">
                <button onClick={onEdit}>✏️</button>
                <button onClick={onArchive}>📦</button>
                <button onClick={onDelete}>🗑️</button>
            </div>
        </>      
    )
}

export function AdviserDropdown({ value, options = [], onChange }) {
    return (
        <select
            className="px-3 py-2 rounded-lg border text-sm"
            value={value || ""}
            onChange={(e) => onChange?.(Number(e.target.value))}
        >
            <option value="" disabled>
                Select adviser
            </option>

            {options.map(adviser => (
                <option key={adviser.id} value={adviser.id}>
                    {adviser.name}
                </option>
            ))}
        </select>
    )
}

// render: row => (
//   <AdviserDropdown
//     advisers={advisersFromAPI}
//     value={row.adviserId}
//     onChange={(id) => updateAdviser(row.id, id)}
//   />
// )


export function ViewMoaButton({ url, label = "View MOA", disabled = false}) {
    if (!url) {
        return <span className="text-gray-400 text-[0.8rem]">No file found</span>
    }
    return(
        <>
            {/* A button which when clicked will show a pdf file that can be downloaded */}
            <AnnounceButton btnText={label} onClick={() => window.open(url, "_blank")}/>
        </>      
    )
}
// render: row => (
//   <ViewMoaButton url={row.moaFileUrl} />
// )

export function HteLocation({ address, mapUrl}) {
    if (!address) return <span className="text-gray-400">—</span>

    return(
        <>
            {/* HTE Location, it's an address text but when the text is too long, it will have ... and when hovered, the full address will popup up top of that text address. If clicked, a mapbox or Google maps will show the location */}
            <div className="relative group max-w-[180px] mx-auto">

                <p onClick={() => mapUrl && window.open(mapUrl, "_blank")} className="text-[1rem] truncate cursor-pointer text-oasis-header hover:underline">
                    {address}
                </p>

                <div className="absolute z-50 hidden group-hover:block bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs bg-black text-white text-[0.75rem] p-3 rounded shadow-lg">
                    {address}
                </div>
            </div>
        </>      
    )
}

// render: row => (
//   <HteLocation
//     address={row.hteAddress}
//     mapUrl={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(row.hteAddress)}`}
//   />
// )