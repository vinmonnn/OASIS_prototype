

export function Label({ fieldId, labelText}) {
    return (
        <>
             <label htmlFor={fieldId} className='font-semibold text-[1rem]'>{labelText}</label>
        </>
    )
}