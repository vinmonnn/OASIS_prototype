import MainScreen from './layouts/mainScreen'
import ctaBg from './assets/ctaBg.png'
import { UpperWave, LowerWave } from './utilities/waves'
import Title from './utilities/title'
import Subtitle from './utilities/subtitle'
import { CustomCard } from './utilities/card'


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

                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>
                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>
                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>
                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>
                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>
                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>
                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>
                        <CustomCard title={"Purpose"} desc={"Lorem ipsum dolor"}></CustomCard>

                    </div>
                </div>
                <LowerWave/>
                <p>text</p>

            </MainScreen>
        </>
    )
}