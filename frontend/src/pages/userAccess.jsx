import { Link } from 'react-router-dom'
import { useState } from 'react'
import LogoModalLeft from '../components/LogoModal'
import LogregScreen from '../layouts/logregScreen'
import Button from '../components/Button'
import UserModal from '../components/userModal'
import Title from '../utilities/title'
import Subtitle from '../utilities/subtitle'

export default function UserAccess() {

    const [switchSign, setSwitchSign] = useState(false)

    return(
        <>
            <LogregScreen>
                <LogoModalLeft position={switchSign ? "right" : "left"}/>
                <UserModal position={switchSign ? "left" : "right"}>
                    <div>
                        <Title text={switchSign ? "Student Registration" : "Student Login"}/>
                        <Subtitle text="Welcome to the OJT Administration, System, and Information System"/>
                    </div>
                    <Button text={switchSign ? "Register" : "Log in"}/>

                <p className="cursor-pointer text-blue-600 mt-3" onClick={() => setSwitchSign(prev => !prev)}>
                    {switchSign ? "Already have an account? Login" : "Don’t have an account? Register"}
                </p>
                </UserModal> 
                
            </LogregScreen>     
        </>
    )
}

function Register() {

}