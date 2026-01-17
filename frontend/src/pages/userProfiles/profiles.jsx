import { StudentProfileScreen } from "../../layouts/profileScreen";
import Subtitle from "../../utilities/subtitle";
import Title from "../../utilities/title";
import info from "../../assets/icons/info.png";


export function StudentProfile() {
    return (
        <>
            <StudentProfileScreen>
                <div className="bg-white p-5 max-w-[95%] w-[90%] border rounded-3xl grid grid-cols-3 gap-5">

                    {/* PROFILE */}
                    <div className="w-full h-auto p-3 flex flex-col gap-1 justify-center items-center">
                        <p>profile</p>
                        <Title text={"Buhawie Santos"} isAnimated={false}/>
                        <p>Button</p>
                    </div>

                    {/* 2ND COLUMN */}
                    <div className="w-full h-auto p-3 flex flex-col gap-1 justify-center items-center">

                        <section className="w-full flex flex-col gap-4">

                            <SectionHeader text={"User Details"} icon={info}/>

                            <div className="grid grid-cols-2">
                                <Subtitle text={"Full Name"} size="text-[0.8rem]"/>
                                <Subtitle text={"Year"} size="text-[0.8rem]"/>
                                <p className="font-oasis-text text-[0.9rem] font-bold">Buhawie F. Santos</p>
                                <p className="font-oasis-text text-[0.9rem] font-bold">2nd Year</p>
                            </div>
                            
                            <div>
                                <Subtitle text={"PUP Webmail"} size="text-[0.8rem]"/>
                                <p className="font-oasis-text text-[0.9rem] font-bold">buhawie@iskolarngbayan.pup.edu.ph</p>
                            </div>
                        </section>

                        <section>
                    
                        </section>
                    </div>

                    {/* 3RD COLUMN */}
                    <div className="w-full h-auto p-3 border flex flex-col gap-1 justify-center items-center">

                    </div>

                </div>
            </StudentProfileScreen>
        </>
    )
}

export function SectionHeader({ icon, text}) {
    return(
        <div className="w-fit p-2 rounded-3xl flex items-center justify-start gap-1 relative backdrop-blur-3xl bg-oasis-blue shadow-[0px_0px_5px_rgba(0,0,0,0.5)]">
            <img src={icon} className="w-7 aspect-square object-contain"/>
            <Subtitle text={text} size={"text-[1rem]"} />
        </div>
    )
}


export function AdminProfile() {
    return (
        <>

        </>
    )
}