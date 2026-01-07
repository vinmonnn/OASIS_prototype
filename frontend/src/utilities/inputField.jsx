import 'animate.css';

export function AdminField({ type = 'text', pholder, id}) {
    return (
        <>
          <input type={type} placeholder={pholder} id={id} className='bg-white w-full p-3 rounded-tl-none rounded-2xl text-black'/>
        </>
    );
}

export function ContentField({ pholder, id, maxNum = 'max-h-100'}) {
    return (
      <>
          <textarea className={`w-full ${maxNum} min-h-12 bg-white p-3 rounded-2xl rounded-tl-none`} placeholder={pholder} id={id}/>
      </>
    )
}