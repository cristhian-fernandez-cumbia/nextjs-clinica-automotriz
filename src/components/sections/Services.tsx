'use client'
import React, { useState } from 'react'
import services from '@/api/services.json'

export interface Service {
  idService: number;
  name: string;
  urlImagen: string;
  active: boolean;
}

const Services  = () => {
  const [selectedService, setSelectedService] = useState<Service>();

  return (
    <div className='px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44'>
      <h2 className='text-white font-bold mt-4 text-center text-2xl lg:text-3xl'>NUESTROS SERVICIOS</h2>
      <div className="flex justify-center mt-4 overflow-hidden">
        <div className=" flex items-center">
          <button className="px-4 py-2 text-white" onClick={() => console.log("Previous")}>{'<'}</button>
          <div className="flex">
            {services.data.services.map((service:Service) => (
              <button
                key={service.idService}
                className={`px-4 py-2 text-white border-2 border-red-500 mr-10 rounded-lg ${selectedService === service ? 'bg-red-500' : 'bg-transparent'}`}
                onClick={() => setSelectedService(service)}
              >
                {service.name}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 text-white" onClick={() => console.log("Next")}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default Services;