import { AdminField, ContentField } from "../utilities/inputField"
import { Label } from "../utilities/label"

export function SingleField({
   labelText, fieldType, fieldHolder, fieldId 
}) {
    return (
        <div className="w-full">
            <Label fieldId={fieldId} labelText={labelText}/>
            <AdminField type={fieldType} pholder={fieldHolder} id={fieldId}/> 
        
         </div>
    )
}

export function MultiField({
   labelText, fieldId, fieldHolder, max
}) {
    return (
        <div className={`w-full`}>
            <Label fieldId={fieldId} labelText={labelText}/>  
            <ContentField pholder={fieldHolder} id={fieldId} maxNum={max}/> 

         </div>
    )
}