import { Outlet, useNavigate } from "react-router-dom";
import ChopkolaAdministratorUserApplicationContextProvider from "../contexts/ChopkolaAdministratorUserApplicationContextProvider";
import Header from "../modules/user-specific/administrator/Header";
import Sidebar from "../modules/user-specific/administrator/Sidebar";
import { useGlobalApplicationContext } from "../contexts/ChopkolaGlobalApplicationContextProvider";
import { useEffect } from "react";

export default function ChopkolaBackOfficeManagementApplicationLayout() {

  const { user } = useGlobalApplicationContext();
  const navigate = useNavigate();

  useEffect(()=>{

    if (!user) {
      navigate('/back-office/login')
    }

  }, [user]);

  if (!user) {
    return <Outlet />;
  }

  return (
      <ChopkolaAdministratorUserApplicationContextProvider>
        <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">
            <Header />
            <Sidebar />
            <Outlet />
        </div>
      </ChopkolaAdministratorUserApplicationContextProvider>
    )
}