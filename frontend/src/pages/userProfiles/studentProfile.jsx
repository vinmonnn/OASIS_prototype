import { StudentProfileScreen } from "../../layouts/profileScreen";
import Subtitle from "../../utilities/subtitle";
import Title from "../../utilities/title";
import info from "../../assets/icons/info.png";
import activity from "../../assets/icons/activity.png";
import star from "../../assets/icons/star.png";
import edit from "../../assets/icons/edit.png";
import testPfp from "../../assets/testprofile.jpg"
import { Activity, BriefcaseBusiness, Edit, FileUser, Info } from "lucide-react";

export default function StudentProfile() {
    return (
        <>
            <StudentProfileScreen>
                <div className="bg-white p-5 max-w-[95%] w-[90%] border rounded-3xl grid grid-cols-3 gap-5 bg-oasis-gradient shadow-[10px_10px_1px_rgba(0,0,0,0.5)] backdrop-blur-3xl">

                    {/* PROFILE */}
                    <div className="w-full h-auto p-3 flex flex-col gap-1 justify-center items-center">
                        <img src={testPfp} className="w-40 aspect-square rounded-full object-cover object-center"/>
                        <Title text={"Francine Hardy Gran"} isAnimated={false}/>
                        <p>Button</p>
                    </div>

                    {/* 2ND COLUMN */}
                    <div className="w-full h-auto p-3 flex flex-col gap-5 justify-center items-center border-l">

                        <section className="w-full flex flex-col gap-4">

                            <SectionHeader text={"User Details"} icon={<Info size={20}/>}/>
                            {/* FULL NAME AND YEAR */}
                            <div className="grid grid-cols-2">
                                <Subtitle text={"Full Name"} size="text-[0.8rem]"/>
                                <Subtitle text={"Year"} size="text-[0.8rem]"/>
                                <p className="font-oasis-text text-[0.9rem] font-bold">Francine Hardy Gran</p>
                                <p className="font-oasis-text text-[0.9rem] font-bold">2nd Year</p>
                            </div>
                            {/* WEBMAIL */}
                            <div>
                                <Subtitle text={"PUP Webmail"} size="text-[0.8rem]"/>
                                <p className="font-oasis-text text-[0.9rem] font-bold">francine@iskolarngbayan.pup.edu.ph</p>
                            </div>
                            
                            {/* PASSWORD */}
                            <div className="grid grid-cols-2 items-center justify-center">
                                <Subtitle text={"Password"} size="text-[0.8rem]"/>
                                <Edit size={20} color="#377268"/>
                                <p className="font-oasis-text text-[0.9rem] font-bold">**********</p>
                            </div>
                            
                        </section>
                            
                        <section className="w-full flex flex-col gap-4 mt-5">
                            <SectionHeader text={"User Activity"} icon={<Activity size={25}/>}/>

                            <div className="w-full py-1 backdrop-blur-3xl rounded-2xl flex flex-col justify-center items-start gap-1">
                                <Subtitle text={"First Access"} size="text-[0.8rem]"/>
                                <p>Monday, 24 February 2025, 2:41 PM</p>
                            </div>
                        </section>
                    </div>

                    {/* 3RD COLUMN */}
                    <div className="w-full h-auto p-3 flex flex-col gap-5 justify-start items-center">
                        <section className="w-full flex flex-col gap-4">

                            <SectionHeader text={"OJT Information"} icon={<FileUser size={25}/>}/>

                            <div className="grid grid-cols-2">
                                <Subtitle text={"OJT Adviser"} size="text-[0.8rem]"/>
                                <Subtitle text={"MOA Request"} size="text-[0.8rem]"/>

                                <p className="font-oasis-text text-[0.9rem] font-bold">Raquel G. Salazar</p>
                                <p className="font-oasis-text text-[0.9rem] font-bold">Pending</p>
                            </div>
                            
                        </section>

                        <section className="w-full flex flex-col gap-4 mt-5">
                            <SectionHeader text={"Host Training Establishment"} icon={<BriefcaseBusiness size={25}/>}/>

                            <div className="flex flex-col justify-center items-center">
                                <Subtitle text={"Currently Applied HTE"} size="text-[0.8rem]"/>
                                <p className="font-oasis-text text-[1rem] font-bold">PrimaTech</p>
                            </div>

                            <div>
                                <Subtitle text={"Reviews"} size="text-[0.8rem]" isCenter={true}/>

                                <section className="w-full flex flex-wrap gap-2 mt-2">

                                    <div className="w-fit px-3 py-1 border bg-oasis-blue flex flex-col justify-center items-center rounded-3xl cursor-pointer">
                                        <Subtitle text={"ABC Technologies"} size={"text-[0.8rem]"} weight={"font-bold"}/>
                                        <div className="flex">
                                            <img src={star} className="w-3 object-contain aspect-square"/>
                                            <img src={star} className="w-3 object-contain aspect-square"/>
                                            <img src={star} className="w-3 object-contain aspect-square"/>
                                        </div>
                                        
                                    </div>
                                </section>
                            </div>
                        </section>

                    </div>  

                </div>
            </StudentProfileScreen>
        </>
    )
}

export function SectionHeader({ icon, text}) {
    return(
        <div className="w-full py-2 px-5 flex items-center justify-start gap-2 relative backdrop-blur-3xl bg-oasis-blue shadow-[2px_2px_3px_rgba(0,0,0,0.5)]">
           {icon}
            <Subtitle text={text} size={"text-[1rem]"} />
        </div>
    )
}

