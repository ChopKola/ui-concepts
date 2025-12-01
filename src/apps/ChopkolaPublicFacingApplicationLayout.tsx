import { Outlet } from "react-router-dom";
import ChopkolaPublicApplicationContextProvider from "../contexts/ChopkolaPublicApplicationContextProvider";
import CartSidebar from "../modules/public/common/CartSidebar";
import Header from "../modules/public/common/Header";
import Footer from "../modules/public/common/Footer";
import { useState } from "react";

export default function ChopkolaPublicFacingApplicationLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <ChopkolaPublicApplicationContextProvider>
      <div className="font-poppins w-full min-h-screen bg-white text-[#4b5966]">
        <Header toggleCart={() => setIsCartOpen(true)} />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Outlet />
        <Footer />
      </div>
    </ChopkolaPublicApplicationContextProvider>
  )
}