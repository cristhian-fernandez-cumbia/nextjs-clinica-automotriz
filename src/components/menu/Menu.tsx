import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="flex items-center">
            <div className="lg:hidden">
                <button className="text-white hover:text-gray-300" onClick={() => setShowMenu(!showMenu)}>
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {showMenu && (
                    <ul className="absolute top-24 left-0 bg-black text-white w-full py-6 px-12 rounded shadow-lg animate-slideDown duration-3000">
                        <MenuItem text="Servicios"/>
                        <MenuItem text="Marcas" />
                        <MenuItem text="Recomendaciones" />
                        <MenuItem text="¿Quiénes somos?" />
                        <button className="bg-red-600 text-white px-4 py-2 mt-4 mb-2 rounded-tr-2xl rounded-bl-2xl hover:text-red-600 hover:bg-white font-bold">Cotiza ya</button>
                    </ul>
                )}
            </div>

            <div className="hidden lg:flex">
                <ul className="flex items-center">
                    <MenuItem text="Servicios" />
                    <MenuItem text="Marcas" />
                    <MenuItem text="Recomendaciones" />
                    <MenuItem text="¿Quiénes somos?" />
                </ul>
                <button className="bg-red-600 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl hover:text-red-600 hover:bg-white font-bold">Cotiza ya</button>
            </div>
        </nav>
    );
}

export default Menu;
