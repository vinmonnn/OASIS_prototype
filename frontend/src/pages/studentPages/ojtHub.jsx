
import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen'
import Accordion from '../../components/accordion'
import Title from '../../utilities/title'

export default function OjtHub() {
    return(
        <>
            <MainScreen>
                {/* PARENT CONTAINER */}
                <div className='w-[95%] p-2 flex flex-col justify-center items-center'>
                    <section className='w-full flex flex-col items-start justify-center'>
                        <Title text={"Guidelines"}/>
                    </section>
                </div>  
                <Accordion />
            </MainScreen>
        </>
    )
}