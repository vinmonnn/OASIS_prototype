import { Header, StudentHeader } from '../components/headers'
import Footer from '../components/footer'   
import orbi from "../assets/orbi.png";
import { Link } from 'react-router-dom';
import ProspectMoaForm from '../components/prospectMoaForm';

export default function MainScreen({ children,  showHeader = true, hasTopMargin = true}) {
    return(
        <>
            <div className='w-full h-full pb-5 bg-[#F4FCF8] flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto'>
                <Header /> 
                {showHeader ? <StudentHeader/> : ""}

                    {hasTopMargin ? <div className='mt-25'></div> : ""}
                    
                    
                    {children}
                    <Link to="/home"><img src={orbi} className='animate__animate animate__pulse fixed bottom-[0%] right-[0%] z-100 w-35 aspect-square hover:cursor-pointer hover:scale-115 transition ease-in-out duration-200 drop-shadow-[3px_3px_10px_rgba(255,255,255,1)] hover:drop-shadow-[3px_3px_1px_rgba(0,0,0,1)]' /></Link>

                    
                    <div className='my-20'></div>
                    <ProspectMoaForm/>
                <Footer />
            </div>
        </>
    )
}