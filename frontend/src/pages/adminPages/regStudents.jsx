import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen.jsx'
import AdminScreen from '../../layouts/adminScreen.jsx';
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";
import OasisTable from "../../components/oasisTable.jsx"
import { Filter } from '../../components/adminComps.jsx';

export default function RegStudents() {

    const headers = ["Name", "Student Webmail", "Year", "OJT Adviser", "Actions"];

    return(
        <>
            <AdminScreen>
                <AdminHeader/>
                <div className=''>
                    <Title text={"Registered Students"}/>
                </div>
                <OasisTable headers ={headers}>
                    <Title text={"Filter by year"}/>
                    <div className="flex flex-row items-center justify-start gap-5">
                        <Filter text={"All"}/>
                        <Filter text={"2nd year"}/>
                        <Filter text={"3rd year"}/>
                    </div>
                </OasisTable>
            </AdminScreen>
        </>
    )
}