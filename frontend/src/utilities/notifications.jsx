import { Filter } from "../components/adminComps";
import Subtitle from "./subtitle";

export default function Notifications() {
    return (
        <div className='w-100 h-[70%] p-5 absolute top-1/2 right-0 -translate-x-[10%] -translate-y-[55%] bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl z-150 rounded-3xl shadow-[0px_0px_5px_rgba(0,0,0,0.5)]'>
            <section className="w-full flex flex-row justify-start items-center gap-5 px-3">
                <Filter text={"All"}/>
                <Filter text={"Unread"}/>
            </section>
            <div className="w-full p-3 rounded-2xl flex flex-col gap-3 mt-3 shadow-[0px_0px_5px_rgba(0,0,0,0.5)] bg-white cursor-pointer duration-100 transition mb-3 hover:bg-gray-100">
                <section className="flex w-full justify-between items-center">
                    <Subtitle text={"You have unfinished business..."} weight={"font-bold"} size={"text-[0.9rem]"}/>
                    <Subtitle text={"2d ago"}/>
                </section>
                <Subtitle text={"Content..."}/>
            </div>
        </div>
    )
}