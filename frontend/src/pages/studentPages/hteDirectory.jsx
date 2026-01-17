import MainScreen from '../../layouts/mainScreen'
import Title from '../../utilities/title'
import ctaBg from "../../assets/ctaBg.png"
import fallbackImg from "../../assets/fallbackImage.jpg"
import Subtitle from '../../utilities/subtitle';
import EmblaCarousel from '../../components/EmblaCarousel';
import "../../embla.css"
import { UserTable } from '../../components/oasisTable';
import { Filter } from '../../components/adminComps'
import ReviewRatings from '../../components/reviewRatings'
import AverageRating from '../../components/averageRating'
import { AddReviewCard, ReviewCard } from '../../utilities/card'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function HteDirectory() {
    const hteHeaders = ["Name of HTE", "Industry", "MOA Signed Date", "Expiration Date", "Status", "MOA File"]

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeHte = searchParams.get("hte");

    useEffect(() => {
        if (activeHte) {
            navigate(`/hte-profile?hte=${encodeURIComponent(activeHte)}`)
        }
    }, [activeHte, navigate])

    const setHte = (hteName) => {
        setSearchParams({ hte: hteName });
    };


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
                        <EmblaCarousel options={OPTIONS} slides={SLIDES} onSelectHte={setHte}/>
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

                        <section className="w-full p-5 flex flex-col justify-center items-center relative">
                            <section className="w-[80%] max-h-dvh overflow-y-auto p-5 flex gap-4 rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
                                <ReviewCard/>
                                <ReviewCard/>
                                <ReviewCard/>
                                <ReviewCard/>
        
                            </section>
                            
                            <AddReviewCard />
                        </section>
                        

                    </section>
                    
                </div>
                
            </MainScreen>
        </>
    )
}