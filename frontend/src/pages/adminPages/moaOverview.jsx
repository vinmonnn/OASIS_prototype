import { Link } from 'react-router-dom'

import AdminScreen from '../../layouts/adminScreen.jsx';
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";
import OasisTable from '../../components/oasisTable.jsx';

export default function MoaOverview() {
    const currentMoasHeaders = ['HTE Name', 'Industry', 'Location', 'Contact Person', 'Expiry Date', 'MOA Status', 'Actions'];

    const prospectMoasHeaders = ['HTE Name', 'Industry', 'Location', 'Contact Person', 'Expiry Date', 'Contact Number', 'MOA File', 'Actions'];

    return(
        <>
            <AdminScreen>
                <AdminHeader/>
                <div className=''>
                    <Title text={"MOA Overview"}/>
                </div>

                <OasisTable headers={currentMoasHeaders}/>

                <div className='flex justify-start items-start w-[90%]'>
                    <Title text={"MOA Prospects Submissions"}/>
                </div>

                <OasisTable headers={prospectMoasHeaders}/>

            </AdminScreen>
        </>
    )
}