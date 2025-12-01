import { Outlet, useNavigate } from "react-router-dom";
import ChopkolaVendorApplicationContextProvider from "../contexts/ChopkolaVendorApplicationContextProvider";
import Header from "../modules/user-specific/vendor/Header";
import Sidebar from "../modules/user-specific/vendor/Sidebar";
import { useGlobalApplicationContext } from "../contexts/ChopkolaGlobalApplicationContextProvider";
import { useEffect } from "react";

export default function ChopkolaVendorApplicationLayout() {

    const { user } = useGlobalApplicationContext();
    const navigate = useNavigate();

    useEffect(()=>{

        if (!user) {
        navigate('/vendor/login')
        }

    }, [user]);

    if (!user) {
        return <Outlet />;
    }

    return (
        <ChopkolaVendorApplicationContextProvider>
            <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">
                <Header />
                <Sidebar />
                <Outlet />
            </div>
        </ChopkolaVendorApplicationContextProvider>
    )
}