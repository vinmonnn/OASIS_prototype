import MainScreen from '../../layouts/mainScreen'
import Title from '../../utilities/title'
import ctaBg from "../../assets/ctaBg.png"
import location from "../../assets/icons/location.png"
import Subtitle from '../../utilities/subtitle';
import EmblaCarousel from '../../components/EmblaCarousel';
import "../../embla.css"

export function CarouselItem({ thumbnail, hteName = "Name of HTE", hteAddress = "Address of HTE" }) {
    return (
        <>
                {/* PARENT WRAPPER */}
                <div className="embla__slide w-60 h-80 overflow-hidden hover:cursor-pointer">

                    {/* IMAGE WRAPPER */}
                    <div className="w-full h-full bg-center bg-cover py-5 flex items-end" style={{ backgroundImage: `url(${thumbnail || ctaBg})`}}>
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
    const OPTIONS = { loop: true }
    const SLIDES = [
        {
            thumbnail: ctaBg,
            hteName: "ABC Corporation",
            hteAddress: "Quezon City"
        },
        {
            thumbnail: ctaBg,
            hteName: "XYZ Industries",
            hteAddress: "Makati City"
        },
        {
            thumbnail: ctaBg,
            hteName: "TechNova",
            hteAddress: "Pasig City"
        },
        {
            thumbnail: ctaBg,
            hteName: "Google",
            hteAddress: "BGC"
        },
        {
            thumbnail: ctaBg,
            hteName: "IBM",
            hteAddress: "Navotas City"
        },
    ];


    return (
        <>
            <MainScreen>

                <Title text={"Overview of Host Training Establishment"}/>
                <div className='my-5'></div>
                <EmblaCarousel options={OPTIONS} slides={SLIDES}/>
                <div className='my-5'></div>
                <Title text={"List of available HTE with MOA"}/>
            </MainScreen>
        </>
    )
}