/* eslint-disable react-hooks/exhaustive-deps */
// "use client"
// import { initBotsonic } from './chatbot';
// import { useEffect } from "react";
import Header from "@/components/header/Header";
import Banner from '@/components/banner/Banner';
import Services from "@/components/sections/Services";
import Footer from "@/components/footer/Footer";
import Tiktok from "@/components/sections/Tiktok";
import LocateUs from "@/components/sections/LocateUs";
import AttentionInfo from "../components/sections/AttentionInfo";
import ServicesCourtesy from "@/components/sections/ServicesCourtesy";
import ServicesCounter from "@/components/sections/ServicesCounter";

export default function Home() {
  // useEffect(() => {
  //   initBotsonic();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <Banner />
      <Services/>
      <ServicesCounter />
      <ServicesCourtesy />
      <AttentionInfo />
      <LocateUs/>
      <Tiktok/>
      <Footer />
    </main> 
  );
}