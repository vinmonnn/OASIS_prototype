import { AdminField, ContentField, UploadField } from "../utilities/inputField"
import { Label } from "../utilities/label"

export function SingleField({
  labelText,
  fieldType = "text",
  fieldHolder,
  fieldId,
  value,
  onChange
}) {
  return (
    <div className="w-full">
      <Label fieldId={fieldId} labelText={labelText} />
      <AdminField
        type={fieldType}
        pholder={fieldHolder}
        id={fieldId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function MultiField({
  labelText,
  fieldId,
  fieldHolder,
  value,
  onChange,
  max
}) {
  return (
    <div className="w-full">
      <Label fieldId={fieldId} labelText={labelText} />
      <ContentField
        pholder={fieldHolder}
        id={fieldId}
        value={value}
        onChange={onChange}
        maxNum={max}
      />
    </div>
  );
}


export function FileUploadField( {labelText, fieldId} ) {
    return (
        <>
            <Label fieldId={fieldId} labelText={labelText}/>
            <UploadField />
        </>
    )
}

export function BulletField( { labelText, fieldId }) {
    return(
        <>
            
        
        </>
    )
}