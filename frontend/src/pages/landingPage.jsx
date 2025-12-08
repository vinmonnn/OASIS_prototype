import ReactFlipCard from 'reactjs-flip-card'
import MainScreen from '../layouts/mainScreen'
import Header from '../components/header'
import ctaBg from '../assets/ctaBg.png'
import { UpperWave, LowerWave } from '../utilities/waves'
import Title from '../utilities/title'
import Subtitle from '../utilities/subtitle'

export default function LandingPage() {

    const cardStyle = {
        card: {background: 'blue', color: 'white', borderRadius: 20,}
    }

    return(
        <>
            <Header/>            
            <MainScreen>
                <div className="w-[90%] aspect-video p-5 bg-[url('../assets/ctaBg.png')]">
                    <img src={ctaBg} className='w-full aspect-'></img>
                </div>

                <UpperWave/>
                <div className='w-full p-10 bg-oasis-blue flex flex-col items-center justify-center'>
                    <Title text="What is OASIS?"/>
                    <Subtitle text="OJT Administration Support, and Information System is your all-in-one platform for managing OJT requirements, announcements, and host establishment information. Explore the cards below to learn more!"/>
                    <div className='flex flex-wrap flex-row '>
                        <ReactFlipCard 
                            frontStyle={cardStyle.card}
                            backStyle={cardStyle.card}
                            frontComponent={<div>Hover me!</div>}
                            backComponent={<div>Back!</div>}
                        />
                    </div>
                </div>
                <LowerWave/>
                <p>text</p>

            </MainScreen>
        </>
    )
}