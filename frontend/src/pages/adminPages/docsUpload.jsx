import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen'
import AdminScreen from '../../layouts/adminScreen.jsx';
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";
import { Container, Filter } from '../../components/adminComps.jsx';

export default function DocsUpload() {
    return(
        <>
            <AdminScreen>
                <AdminHeader/>
                <div className=''>
                    <Title text={"Documents Upload"}/>
                </div>
                <Container>
                    <section className='w-full flex flex-row justify-start items-center gap-5'>
                        <Filter text={"Procedures"}/>
                        <Filter text={"MOA Process"}/>
                        <Filter text={"Key Guidelines"}/>
                        <Filter text={"Forms & Templates"}/>
                        
                        
                    </section>
                    <form>
                        
                    </form>
                </Container>
            </AdminScreen>
        </>
    )
}