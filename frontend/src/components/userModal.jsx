
export default function UserModal({ children, position = "right" }) {

    const userModalPos = position == "right" ? "translate-x-[-50%]" : "translate-x-[-120%]"

    return (
        <>
            <div className={`animate__animated animate__backInDown w-fit aspect-square p-1 bg-white absolute right-0 top-[50%] ${userModalPos} translate-y-[-50%] rounded-[50px] shadow-[inset_0px_0px_100px] shadow-oasis-blue drop-shadow-[10px_10px_5px_rgba(0,0,0,0.3)] duration-500 ease-in-out`}>
                <div className='relative min-w-100 max-w-130 aspect-square p-10 flex flex-col items-center justify-evenly'>
                    {children}
                </div>
            </div>
        </>
    )
}