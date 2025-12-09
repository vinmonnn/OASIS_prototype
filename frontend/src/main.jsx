import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'animate.css';
import './styles.css'
import LandingPage from './landingPage'
import Admin from './pages/admin'
import Student from './pages/student'
import UserAccess from './pages/userAccess'
import NotFound from './notFound'

const router = createBrowserRouter([
  {path: '/', element: <LandingPage />},
  {path: '/access', element: <UserAccess />},,
  {path: '/admin', element: <Admin />}, 
  {path: '/student', element: <Student />},
  {path: '*', element: <NotFound />}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
