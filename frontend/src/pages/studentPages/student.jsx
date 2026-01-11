
import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen';
import ctaBg from '../../assets/ctaBg.png';
import fallbackImg from "../../assets/fallbackImage.jpg"
import { UpperWave, LowerWave } from '../../utilities/waves';
import Title from '../../utilities/title';
import Subtitle from '../../utilities/subtitle';
import { CustomCard } from '../../utilities/card';
import OasisTable, { UserTable } from "../../components/oasisTable.jsx";
import { Button } from '../../components/button.jsx';

export default function Student() {
    const updatesHeader = ["Name of HTE", "Industry", "MOA Signed Date", "Expiration", "MOA Status"]
    return(
        <>
            <MainScreen hasTopMargin={true}>
                <div className="w-[90%] h-dvh rounded-3xl overflow-hidden relative flex flex-col items-center justify-center shadow-[0px_0px_10px_rgba(0,0,0,1)]">
                     <h1 className='text-7xl font-oasis-text font-bold bg-linear-to-b bg-clip-text text-transparent from-oasis-button-light to-30% to-oasis-blue text-shadow-[0px_2px_5px_rgba(255,255,255,0.5)] text-center z-5'>Welcome to OASIS</h1>
                     {/*  */}
                     <p className='text-[1rem] italic font-oasis-text bg-linear-to-b bg-clip-text text-transparent from-oasis-button-light to-30% to-oasis-blue text-shadow-[0px_2px_5px_rgba(255,255,255,0.5)] text-center z-5'>Tulay sa oportunidad, gabay sa kinabukasan</p>
                     
                    <img src={fallbackImg} className='absolute w-full h-full mt-[-20] object-cover bg-center bg-no-repeat bg-cover '/>
                   
                </div>

                <UpperWave/>
                <div className='w-full min-h-150 h-auto pb-5 pt-5 bg-oasis-blue flex flex-wrap flex-col items-center justify-center gap-10'>

                    <section className='w-[50%] flex flex-col gap-2'>
                        <Title text="HTE Dashboard Updates"/>
                        <Subtitle isCenter={true} size={'text-[0.75rem]'} text="See the latest HTEs with updates regarding their MOA status!"/>
                    </section>

                    <UserTable headers={updatesHeader}>

                    </UserTable>
                    <section className='w-[50%] flex flex-col gap-2 mt-10'>
                        <Title text="What is OASIS?"/>
                        <Subtitle isCenter={true} size={'text-[0.75rem]'} text="OJT Administration Support, and Information System is your all-in-one platform for managing OJT requirements, announcements, and host establishment information. Explore the cards below to learn more!"/>
                    </section>
                   

                    <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10 justify-center place-items-center">


                        <CustomCard title={"Purpose"} desc={"OASIS aims to simplify and digitize internship management — making information, forms, and updates easily accessible for students and coordinators."}></CustomCard>
                        <CustomCard title={"Announcements"} desc={"Never miss an important deadline or announcement. This page keeps students informed of all OJT-related updates in real time."}></CustomCard>
                        <CustomCard title={"Downloadable"} desc={"Access all internship documents in one place — including MOAs, accomplishment sheets, evaluation forms, and consent letters."}></CustomCard>
                        <CustomCard title={"HTE Dashboard"} desc={"View all partner HTEs, track their MOA validity, and monitor which establishments are active or due for renewal."}></CustomCard>
                        <CustomCard title={"OJT Hub"} desc={"OASIS aims to simplify and digitize internship management — making information, forms, and updates easily accessible for students and coordinators."}></CustomCard>
                        <CustomCard title={"ORBI"} desc={"ORBI serves as the digital companion of every OASIS user — ensuring no question goes unanswered and every student receives timely, reliable, and friendly support throughout their internship journey."}></CustomCard>


                    </div>
                </div>
                <LowerWave/>


            </MainScreen>          
        </>
    )
}