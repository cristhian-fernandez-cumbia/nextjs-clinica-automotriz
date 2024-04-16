'use client'
import { ArrowCurved, ArrowCurvedPhone, Car } from '@/app/assets/icons';
import React, { useState } from 'react';

const Maintenance = () => {
  const [placa, setPlaca] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaca(event.target.value);
  };

  const handleBuscarSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlaca('');
    console.log('Placa ingresada:', placa);
  };
  return (
    <div className='relative mt-16 lg:mt-0 -bottom-56 lg:-bottom-0'>
      <div className='w-40 bg-red-600 h-40 absolute -top-5 -left-5 z-60 rounded-lg'></div>
      <div className='bg-white rounded-lg py-6 lg:py-8 px-6 w-64 lg:w-80 z-50 relative'>
        <form onSubmit={handleBuscarSubmit}>
          <div className='flex items-center mb-6'>
            <Car />
            <h1 className='text-black font-extrabold text-lg lg:text-xl ml-2 leading-5'>MI PRÓXIMO MANTENIMIENTO</h1>
          </div>
          <p className='text-gray-400 font-bold text-xs lg:text-sm'>1. SI YA ERES CLIENTE DEL TALLER, SOLO TIENES QUE LLENAR AQUÍ:</p>
          <input 
            type="text" 
            placeholder="INGRESA TU PLACA" 
            className="border-2 border-gray-300 text-center placeholder-gray-400 focus:placeholder-transparent py-2 px-5 my-4 text-black text-xs lg:text-sm"
            value={placa}
            onChange={handleInputChange}
          />
          
          <div className='relative'>
            <p className='text-gray-400 font-bold text-xs lg:text-sm mb-3 lg:mb-28'>2. LISTO! AHORA PUEDES CONOCER LA FECHA EXACTA</p>
            <ArrowCurved className='absolute top-5 left-[242px] hidden lg:block'/>
            <ArrowCurvedPhone className='absolute -top-12 left-[202px] lg:hidden'/>
          </div>
          <button className="bg-red-500 text-white px-7 lg:px-10 py-2 rounded-lg hover:bg-red-700 font-bold absolute -bottom-4 lg:bottom-6 -right-24 hover:cursor-pointer z-10" type="submit">BUSCAR AHORA </button>
        </form>
      </div>
    </div>
  );
};

export default Maintenance;

