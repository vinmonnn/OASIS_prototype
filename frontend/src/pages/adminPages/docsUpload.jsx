import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen'
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";

export default function DocsUpload() {
    return(
        <>
            <MainScreen>
                <AdminHeader/>
                <div className=''>
                    <Title text={"Documents Upload"}/>
                </div>
            </MainScreen>
        </>
    )
}