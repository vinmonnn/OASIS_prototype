import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'animate.css';
import './styles.css'
import LandingPage from './pages/landingPage'
import Admin from './pages/admin'
import Student from './pages/student'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/notFound'

const router = createBrowserRouter([
  {path: '/landing', element: <LandingPage />},
  {path: '/login', element: <Login />},
  {path: '/register', element: <Register />},
  {path: '/admin', element: <Admin />},
  {path: '/student', element: <Student />},
  {path: '*', element: <NotFound />}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
