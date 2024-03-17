/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { initBotsonic } from './chatbot';
import { useEffect } from "react";
import Header from "@/components/header/Header";
import Banner from '@/components/banner/Banner';

export default function Home() {
  useEffect(() => {
    initBotsonic();
  }, []);

  return (
    <main className="flex min-h-screen flex-col ">
      <Header />
      <Banner />
    </main>
  );
}
