import Footer from "../components/footer";
import { Header, StudentHeader } from "../components/headers";

export function StudentProfileScreen({ children }) {
    return(
        <>
            <Header/>
            <StudentHeader/>
            <div className="w-full h-auto min-h-dvh flex flex-col items-center overflow-x-hidden p-10 bg-linear-to-l from-white via-oasis-blue to-white pt-30">
                {children}
            </div>
        </>
    )
}