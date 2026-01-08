import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import 'animate.css';
import './styles.css'
import LandingPage from './landingPage'
import Admin from './pages/adminPages/admin'
import Student from './pages/studentPages/student'
import UserAccess from './pages/userAccess'
import NotFound from './notFound'
import AdmOperations from './pages/adminPages/admOperations';
import DocsUpload from './pages/adminPages/docsUpload';
import MoaOverview from './pages/adminPages/moaOverview';
import RegStudents from './pages/adminPages/regStudents';
import ScrollToTop from './components/scrollToTop';

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'access', element: <UserAccess /> },
      { path: 'admin', element: <Admin /> },
      { path: 'admOperations', element: <AdmOperations /> },
      { path: 'admUploads', element: <DocsUpload /> },
      { path: 'admMoaOverview', element: <MoaOverview /> },
      { path: 'admStudents', element: <RegStudents /> },
      { path: 'student', element: <Student /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

