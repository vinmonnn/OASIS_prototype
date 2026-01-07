import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen.jsx'
import AdminScreen from '../../layouts/adminScreen.jsx';
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";
import OasisTable from "../../components/oasisTable.jsx"

export default function RegStudents() {

    const headers = ["Name", "Student Webmail", "Year", "OJT Adviser", "Actions"];

    return(
        <>
            <AdminScreen>
                <AdminHeader/>
                <div className=''>
                    <Title text={"Registered Students"}/>
                </div>
                <OasisTable headers ={headers}/>
            </AdminScreen>
        </>
    )
}