import '../styles.css'
import { Link } from 'react-router-dom'
import LogoModal from '../components/LogoModal'
import LogregScreen from '../layouts/logregScreen'
import Button from '../components/Button'
import UserModal from '../components/userModal'
import Title from '../utilities/title'
import Subtitle from '../utilities/subtitle'

export default function Login() {
    return(
        <>
            <LogregScreen>
                <LogoModal />
                <UserModal>
                    <div>
                        <Title text="Student Login"/>
                        <Subtitle text="Welcome to the OJT Administration, System, and Information System"/>
                    </div>
                    
                    <Button text="Log in"/>
                </UserModal> 
                
            </LogregScreen>     
        </>
    )
}