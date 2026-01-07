import MainScreen from './layouts/mainScreen'
import ctaBg from './assets/ctaBg.png'
import { UpperWave, LowerWave } from './utilities/waves'
import Title from './utilities/title'
import Subtitle from './utilities/subtitle'
import { CustomCard } from './utilities/card'
import OasisTable from "./components/oasisTable.jsx";

export default function LandingPage() {

    return(
        <>
            
            <MainScreen>
                <div className="w-[90%] aspect-video p-5 bg-[url('../assets/ctaBg.png')]">
                    <img src={ctaBg} className='w-full aspect-'></img>
                </div>

                <UpperWave/>
                <div className='w-full min-h-150 h-auto pb-5 pt-5 bg-oasis-blue flex flex-wrap flex-col items-center justify-center'>
                    <Title text="What is OASIS?"/>
                    <Subtitle text="OJT Administration Support, and Information System is your all-in-one platform for managing OJT requirements, announcements, and host establishment information. Explore the cards below to learn more!"/>

                    <div className='flex flex-wrap w-[80%] h-auto pb-10 pt-10 items-center justify-evenly border-red-300 gap-5'>

                        <CustomCard title={"Purpose"} desc={"OASIS aims to simplify and digitize internship management — making information, forms, and updates easily accessible for students and coordinators."}></CustomCard>
                        <CustomCard title={"Announcements"} desc={"Never miss an important deadline or announcement. This page keeps students informed of all OJT-related updates in real time."}></CustomCard>
                        <CustomCard title={"Downloadable"} desc={"Access all internship documents in one place — including MOAs, accomplishment sheets, evaluation forms, and consent letters."}></CustomCard>
                        <CustomCard title={"HTE Dashboard"} desc={"View all partner HTEs, track their MOA validity, and monitor which establishments are active or due for renewal."}></CustomCard>
                        <CustomCard title={"OJT Hub"} desc={"OASIS aims to simplify and digitize internship management — making information, forms, and updates easily accessible for students and coordinators."}></CustomCard>
                        <CustomCard title={"ORBI"} desc={"ORBI serves as the digital companion of every OASIS user — ensuring no question goes unanswered and every student receives timely, reliable, and friendly support throughout their internship journey."}></CustomCard>


                    </div>
                </div>
                <LowerWave/>
            <OasisTable></OasisTable>
                
            </MainScreen>
        </>
    )
}