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
}