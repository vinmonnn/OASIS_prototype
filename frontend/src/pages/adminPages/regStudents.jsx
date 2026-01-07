import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen.jsx'
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";

export default function RegStudents() {
    return(
        <>
            <MainScreen>
                <AdminHeader/>
                <div className=''>
                    <Title text={"Registered Students"}/>
                </div>
            </MainScreen>
        </>
    )
}