
import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen'
import Accordion from '../../components/accordion'
import Title from '../../utilities/title'
import Subtitle from '../../utilities/subtitle'
import Download from "../../assets/icons/download.png"

export default function OjtHub() {
    return(
        <>
            <MainScreen>
                <div className='w-full flex flex-col items-center mb-10'>
                    <Title text={"OJT Hub"} size="text-[3rem]"/>
                    <Subtitle size={"text-[1rem]"} color={"text-oasis-button-dark"} text={"See the guidelines, procedures, and requirements regarding On-The-Job training!"}/>
                 </div>

                {/* PARENT CONTAINER */}
                <div className='w-[90%] p-2 flex flex-col justify-center items-center gap-20'>

                    <section className='w-full flex flex-col items-start justify-center gap-5'>
                        <Title text={"Guidelines"} isAnimated={false}/>
                        <div className='w-full border'></div>
                        <Subtitle size={"text-[0.9rem]"} text={"Welcome to OASIS, your partner in a seamless internship journey. Read the procedures carefully to understand the pre-internship, during, and post-internship requirements."}/>

                    </section>

                    <section className='w-full flex flex-col items-start justify-center gap-5'>
                        <Title text={"Procedures"} isAnimated={false}/>
                        <div className='w-full border'></div>

                        <Accordion headerText={"Before Internship"}>

                        </Accordion>
                    </section>

                    <section className='w-full flex flex-col items-start justify-center gap-5'>
                        <Title text={"MOA Process"} isAnimated={false}/>
                        <div className='w-full border'></div>
                        
                        <Accordion headerText={"MOA Process (HTE without an existing MOA)"}>

                        </Accordion>
                    </section>

                    <section className='w-full flex flex-col items-start justify-center gap-5'>
                        <Title text={"Key Guidelines"} isAnimated={false}/>
                        <div className='w-full border'></div>
                        
                        <Accordion headerText={"Important reminders"}>

                        </Accordion>
                    </section>
                    <section className='w-full flex flex-col items-start justify-center gap-5'>
                        <Title text={"Internship Forms and Templates"} isAnimated={false}/>
                        <div className='w-full border'></div>

                        <div className="w-full p-4 flex flex-row items-center gap-5 bg-oasis-blue rounded-2xl overflow-hidden transition-all cursor-pointer hover:underline underline-offset-2">
                            <img src={Download}/>
                            <Subtitle size={"text-[1rem]"} color={"text-oasis-button-dark"} weight={"font-bold"} text={"Weekly Accomplishment"} />
                        </div>
                    </section>
                    
                </div>  
                
            </MainScreen>
        </>
    )
}