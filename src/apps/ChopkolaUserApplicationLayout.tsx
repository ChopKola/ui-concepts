import { Outlet, useNavigate } from "react-router-dom";
import ChopkolaUserApplicationContextProvider from "../contexts/ChopkolaUserApplicationContextProvider";
import Header from "../modules/user-specific/customer/Header";
import Sidebar from "../modules/user-specific/customer/Sidebar";
import { useGlobalApplicationContext } from "../contexts/ChopkolaGlobalApplicationContextProvider";
import { useEffect } from "react";

export default function ChopkolaUserApplicationLayout() {

    const { user } = useGlobalApplicationContext();
    const navigate = useNavigate();

    useEffect(()=>{

        if (!user) {
            navigate('/login')
        }

    }, [user]);

    if (!user) {
    return <Outlet />;
    }

    return (
        <ChopkolaUserApplicationContextProvider>
            <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">
                <Header />
                <Sidebar />
                <Outlet />
            </div>
        </ChopkolaUserApplicationContextProvider>
    )
}