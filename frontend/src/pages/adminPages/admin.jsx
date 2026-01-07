import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen'
import AdminScreen from '../../layouts/adminScreen.jsx';
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";
import { AdmCard } from "../../utilities/card.jsx"
import user from "../../assets/icons/user.png"
export default function Admin() {
    return(
        <>
            <AdminScreen>
                <AdminHeader/>
                
                {/* PARENT CONTAINER */}
                
                <div className='w-full flex flex-col gap-10 items-center justify-center'>
                    <div className=''>
                        <Title text={"Admin Dashboard"}/>
                    </div>

                    <section className='border-5 p-5 w-[90%] flex flex-row justify-between items-center flex-wrap gap-5'>

                        <AdmCard 
                            cardTitle={"Total Students"}
                            cardIcon={user}
                            cardNumber={"24"}
                            cardDate={"January 7, 2026"}
                        />
                        <AdmCard 
                            cardTitle={"Total Students"}
                            cardIcon={user}
                            cardNumber={"24"}
                            cardDate={"January 7, 2026"}
                        />
                        <AdmCard 
                            cardTitle={"Total Students"}
                            cardIcon={user}
                            cardNumber={"24"}
                            cardDate={"January 7, 2026"}
                        />
                        <AdmCard 
                            cardTitle={"Total Students"}
                            cardIcon={user}
                            cardNumber={"24"}
                            cardDate={"January 7, 2026"}
                        />
                    </section>
                    <div className='flex justify-start items-start w-[90%]'>
                            <Title text={"Post Announcements"}/>
                    </div>
                    {/* POST ANNOUNCEMENTS SECTION */}
                    <section className='border-5 p-5 w-[90%] flex flex-row justify-between items-center flex-wrap gap-5'>
                        
                        <div className='w-[70%] min-h-24 p-3 bg-admin-element'>

                        </div>
                        <div className='w-[20%] min-h-24 p-3 bg-admin-element'>

                        </div>
                        

                    </section>

                </div>
            </AdminScreen>
        </>
    )
}