'use client'
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Button from '../button/Button';

const Menu: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="flex items-center">
            <div className="lg:hidden">
                <Button className="text-white hover:text-gray-300" onClick={() => setShowMenu(!showMenu)}> 
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Button>
                {showMenu && (
                    <ul className="absolute top-[70px] left-0 bg-black text-white w-full py-6 px-12 rounded shadow-lg animate-slideDown duration-3000 z-10">
                        <MenuItem text="SERVICIOS" to='services'/>
                        <MenuItem text="LOCALES" to='locate-us'/>
                        <MenuItem text="TIKTOK" to='tiktok'/>
                        <Button className="bg-yellow-400 text-black px-10 py-2 mt-4 mb-2 rounded-tr-2xl rounded-bl-2xl hover:text-red-600 hover:bg-white font-bold">AGENDA TU CITA</Button>
                    </ul>
                )}
            </div>

            <div className="hidden lg:flex bg-transparent">
                <ul className="flex items-center">
                    <MenuItem text="SERVICIOS" to='services'/>
                    <MenuItem text="LOCALES" to='locate-us'/>
                    <MenuItem text="TIKTOK" to='tiktok'/>
                </ul>
                <Button className="bg-yellow-400 text-black px-10 py-2 rounded-tr-2xl rounded-bl-2xl hover:text-red-600 hover:bg-white font-bold">AGENDA TU CITA</Button>
            </div>
        </nav>
    );
}

export default Menu;
