import { Link } from 'react-router-dom'
import MainScreen from '../../layouts/mainScreen'
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";
import { AdmCard } from "../../utilities/card.jsx"
import user from "../../assets/icons/user.png"
export default function Admin() {
    return(
        <>
            <MainScreen>
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
                    
                    {/* POST ANNOUNCEMENTS SECTION */}
                    <section className='border-5 p-5 w-[90%] flex flex-row justify-between items-center flex-wrap gap-5'>

                    </section>

                </div>
                

            </MainScreen>
        </>
    )
}