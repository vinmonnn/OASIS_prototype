import MainScreen from '../../layouts/mainScreen'
import Title from '../../utilities/title'
import ctaBg from "../../assets/ctaBg.png"
import fallbackImg from "../../assets/fallbackImage.jpg"
import location from "../../assets/icons/location.png"
import Subtitle from '../../utilities/subtitle';
import EmblaCarousel from '../../components/EmblaCarousel';
import "../../embla.css"
import { UserTable } from '../../components/oasisTable';
import { Filter } from '../../components/adminComps'
import ReviewRatings from '../../components/reviewRatings'
import AverageRating from '../../components/averageRating'
import { ReviewCard } from '../../utilities/card'

export function CarouselItem({ thumbnail, hteName = "Name of HTE", hteAddress = "Address of HTE" }) {
    return (
        <>
                {/* PARENT WRAPPER */}
                <div className="embla__slide w-60 h-80 overflow-hidden hover:cursor-pointer">

                    {/* IMAGE WRAPPER */}
                    <div className="w-full h-full bg-center bg-cover py-5 flex items-end" style={{ backgroundImage: `url(${thumbnail || fallbackImg})`}}>
                        <div className='w-full flex flex-col items-start p-3 backdrop-blur-md bg-white/30 shadow-lg text-white'>
                            <Subtitle text={hteName} weight={"font-bold"} size={"text-[1.2rem]"}/>

                            <section className='w-full flex flex-row justify-start items-center gap-3'>
                                <img src={location} className='w-5'/>
                                <Subtitle text={hteAddress} size={"text-[0.7rem]"}/>
                            </section>
                        </div>
                    </div>

                </div>
            
        </>
        
    );
}

export default function HteDirectory() {
    const hteHeaders = ["Name of HTE", "Industry", "MOA Signed Date", "Expiration Date", "Status", "MOA File"]
    const OPTIONS = { loop: true }
    const SLIDES = [
        {
            thumbnail: fallbackImg,
            hteName: "ABC Corporation",
            hteAddress: "Quezon City"
        },
        {
            thumbnail: fallbackImg,
            hteName: "XYZ Industries",
            hteAddress: "Makati City"
        },
        {
            thumbnail: fallbackImg,
            hteName: "TechNova",
            hteAddress: "Pasig City"
        },
        {
            thumbnail: fallbackImg,
            hteName: "Google",
            hteAddress: "BGC"
        },
        {
            thumbnail: fallbackImg,
            hteName: "IBM",
            hteAddress: "Navotas City"
        },
    ];


    return (
        <>
            <MainScreen>
                <div className="flex flex-col justify-center items-center gap-10 w-full">

                    <div className='w-full flex flex-col items-center mb-10'>
                        <Title text={"HTE Directory"} size="text-[3rem]"/>
                        <Subtitle size={"text-[1rem]"} color={"text-oasis-button-dark"} text={"See the lists of HTEs with their MOA and significant details; See the reviews about HTEs and make a review yourself!"}/>
                    </div>

                    <section className="w-full flex flex-col gap-5 justify-center items-center">
                        <Title text={"Overview of Host Training Establishment"}/>
                        <EmblaCarousel options={OPTIONS} slides={SLIDES}/>
                    </section>
                    
                    
                    <section className="w-full flex flex-col gap-5 justify-center items-center">
                        <Title text={"List of available HTE with MOA"}/>
                        <UserTable headers={hteHeaders}></UserTable>
                    </section>

{/* REVIEWS SECTION */}
                    <section className="w-full flex flex-col gap-5 justify-center items-center">
                        <Title text={"Student Reviews"}/>

                        <section className='w-[80%] flex justify-start items-center'>
                            <Filter text={"Filters"}/>
                        </section>

                        <section className="w-full p-5 flex flex-row justify-evenly items-center">
                            <ReviewRatings/>
                            <AverageRating/>
                        </section>

                        <section className="w-[50%] max-h-dvh overflow-y-auto p-5 flex flex-wrap gap-4 rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                            
    
                        </section>
                    </section>
                    
                </div>
                
            </MainScreen>
        </>
    )
}