import 'animate.css';
import { useState, useRef, useEffect } from 'react';
import LogregScreen from '../layouts/logregScreen';
import UserModal from '../components/userModal';
import { UpdatedLogin, UpdatedReg } from '../components/forms';
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

export default function UserAccess() {
  const { role, loading } = useAuth();

  // ✅ ADD THESE (MISSING BEFORE)
  const ACCESS = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
  };

  const [accessType, setAccessType] = useState(ACCESS.LOGIN);

  if (loading) return null;

  if (role === "ADMIN") return <Navigate to="/admin" replace />;
  if (role === "STUDENT") return <Navigate to="/home" replace />;

  return (
    <>
      <LogregScreen>
        <UserModal>

          {accessType === ACCESS.LOGIN && (
            <>
              <UpdatedLogin />
              <section className="w-full flex flex-row items-center justify-between">
                <p
                  className="cursor-pointer hover:underline underline-offset-2 font-oasis-text text-[0.8rem]"
                  onClick={() => setAccessType(ACCESS.REGISTER)}
                >
                  Not registered yet?
                </p>
                <p 
                  className="cursor-pointer hover:underline underline-offset-2 font-oasis-text text-[0.8rem]"
                >
                  Forgot password
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
