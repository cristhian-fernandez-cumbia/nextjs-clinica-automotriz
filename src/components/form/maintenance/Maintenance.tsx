'use client'
import { ArrowCurved, ArrowCurvedPhone, Car } from '@/app/assets/icons';
import Modal from '@/components/modal/Modal';
import React, { useState } from 'react';
import MaintenanceSearch from './MaintenanceSearch';
import placas from '@/api/placas.json'
import { Vehiculo } from '@/interface/home';

const Maintenance = () => {
  const [placa, setPlaca] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [vehiculo, setVehiculo] = useState<Vehiculo | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaca(event.target.value);
  };

  const handleBuscarSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVehiculo(null);
    console.log('Placa ingresada:', placa);
    // setPlaca('');
    const placaSinFormato = placa.replace(/-/g, '').toLowerCase();
    const vehiculo = placas.find(item => item.placaVehiculo.replace(/-/g, '').toLowerCase() === placaSinFormato);
    if (vehiculo) {
      setVehiculo(vehiculo);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='relative mt-16 lg:mt-0 -bottom-56 lg:-bottom-0'>
        <div className='w-40 bg-primary h-40 absolute -top-5 -left-5 z-30 rounded-lg'></div>
        <div className='bg-white rounded-lg py-6 lg:py-8 px-6 w-64 lg:w-80 z-30 relative'>
          <form onSubmit={handleBuscarSubmit}>
            <div className='flex items-center mb-6'>
              <Car />
              <h1 className='text-black font-extrabold text-lg lg:text-xl ml-2 leading-5'>MI PRÓXIMO MANTENIMIENTO</h1>
            </div>
            <p className='text-gray-400 font-bold text-xs lg:text-sm lg:w-64'>1. SI YA ERES CLIENTE DEL TALLER, SOLO TIENES QUE LLENAR AQUÍ:</p>
            <input 
              type="text" 
              placeholder="INGRESA TU PLACA" 
              className="border-2 border-gray-300 text-center placeholder-gray-400 focus:placeholder-transparent py-2 px-5 my-4 text-black text-xs lg:text-sm"
              value={placa}
              onChange={handleInputChange}
            />
            
            <div className='relative'>
              <p className='text-gray-400 font-bold text-xs lg:text-sm mb-3 lg:mb-28 lg:w-64'>2. LISTO! AHORA PUEDES CONOCER LA FECHA EXACTA</p>
              <ArrowCurved className='absolute top-5 left-[242px] hidden lg:block'/>
              <ArrowCurvedPhone className='absolute -top-12 left-[202px] lg:hidden'/>
            </div>
            <button className="bg-primary text-white px-7 lg:px-10 py-2 rounded-lg hover:bg-red-700 font-bold absolute -bottom-4 lg:bottom-6 -right-24 hover:cursor-pointer z-10" type="submit" onClick={openModal}>BUSCAR AHORA </button>
          </form>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MaintenanceSearch vehiculo={vehiculo}/>
      </Modal>
    </>
  );
};

export default Maintenance;

