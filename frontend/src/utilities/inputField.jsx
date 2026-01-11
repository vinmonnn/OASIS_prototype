import 'animate.css';

export function AdminField({ type = 'text', pholder, id, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={pholder}
            id={id}
            value={value}
            onChange={onChange}
            className='bg-white w-full p-3 rounded-tl-none rounded-2xl text-black'
        />
    );
}

export function ContentField({ pholder, id, maxNum = 'max-h-100', value, onChange }) {
    return (
        <textarea
            placeholder={pholder}
            id={id}
            value={value}
            onChange={onChange}
            className={`w-full ${maxNum} min-h-12 bg-white p-3 rounded-2xl rounded-tl-none`}
        />
    );
}


export function UploadField() {
  return (
    <>
      <input type='file' className='bg-white w-full p-3 rounded-tl-none rounded-2xl text-black cursor-pointer'/>
    </>
  )
}