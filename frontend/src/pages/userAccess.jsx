import 'animate.css';
import { useState, useRef } from 'react';
import LogregScreen from '../layouts/logregScreen';
import UserModal from '../components/userModal';
import { UpdatedLogin, UpdatedReg,  } from '../components/forms';
import { Link } from 'react-router-dom';
export default function UserAccess() {

   const ACCESS = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER"
};

const [accessType, setAccessType] = useState(ACCESS.LOGIN);

    return (
        <>
            <LogregScreen>
                <UserModal>

                    {accessType === ACCESS.LOGIN && (
                        <>
                            <UpdatedLogin />

                            <section className="flex flex-row items-center justify-center">
                                <p
                                    className="cursor-pointer underline font-oasis-text text-[0.8rem]"
                                    onClick={() => setAccessType(ACCESS.REGISTER)}
                                >
                                    Not registered yet?
                                </p>
                            </section>
                        </>
                    )}

                    {accessType === ACCESS.REGISTER && (
                        <>
                            <UpdatedReg />

                            <section className="flex flex-row items-center justify-center">
                                <p
                                    className="cursor-pointer underline font-oasis-text text-[0.8rem]"
                                    onClick={() => setAccessType(ACCESS.LOGIN)}
                                >
                                    Already registered?
                                </p>
                            </section>
                        </>
                    )}

                </UserModal>
            </LogregScreen>
        </>
    );



    // const [switchSign, setSwitchSign] = useState(false)

    // return(
    //     <>
    //         <LogregScreen>
    //             <LogoModalLeft position={switchSign ? "right" : "left"}/>
    //             <UserModal 
    //                 position={switchSign ? "left" : "right"} 
    //                 shadow={switchSign ? 'drop-shadow-[5px_10px_5px_rgba(0,0,0,0.3)]' : 'drop-shadow-[13px_9px_5px_rgba(0,0,0,0.3)]' }
    //             >
    //                 <div>
    //                     <Title text={switchSign ? "Student Registration" : "Student Login"}/>
    //                     <Subtitle text="Welcome to the OJT Administration, System, and Information System"/>
    //                 </div>

    //              {switchSign ? <RegForm/> : <LoginForm/>}

    //              <div className='w-[90%] flex flex-row items-center justify-between'>
    //                 <p className="cursor-pointer font-oasis-text text-black mt-3 text-[0.8rem] font-semibold hover:underline hover:underline-offset-2" onClick={() => setSwitchSign(prev => !prev)}>
    //                     {switchSign ? "I want to login" : "I want to register"}
    //                 </p>
                    
    //             </div>
    //             </UserModal> 
                
    //         </LogregScreen>     
    //     </>
    // )
}

