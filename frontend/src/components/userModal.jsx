
export default function UserModal({ children}) {

   
    return (
        <>
            <div className={` min-w-[30%] h-full p-1 bg-white absolute right-0 top-[50%] right translate-y-[-50%] shadow-[inset_0px_0px_100px] shadow-oasis-blue drop-shadow-[10px_10px_5px_rgba(0,0,0,0.3)] duration-500 ease-in-out flex items-center justify-center`}>
                <div className='relative min-w-100 max-w-130 aspect-square p-10 flex flex-col items-center justify-evenly'>
                    {children}
                </div>
            </div>
        </>
    )
}