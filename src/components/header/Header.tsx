'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Menu from '../menu/Menu';
import logo_clinica_automotriz from './../../app/assets/img/logo_clinica_automotriz.png';
import Link from 'next/link';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollY]);

  return (
    <div
      className={`flex justify-between items-center py-4 px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 fixed top-0 w-full z-50 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <Link href={"/"}>
        <Image src={logo_clinica_automotriz} alt="logo_clinica_automotriz" className="w-[140px] lg:w-[200px]" />
      </Link>
      <Menu />
    </div>
  );
};

export default Header;
