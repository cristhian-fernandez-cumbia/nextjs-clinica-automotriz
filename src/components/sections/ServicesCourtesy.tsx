import React from 'react'
import dataServicesCourtesy from '@/api/servicesCourtesy.json'
import Image from 'next/image';
import { ArrowDownTriangle } from '@/assets/icons';

interface ServicesCourtesy {
  idService: number;
  urlImagen: string;
  title: string;
  subtitle: string;
  active: boolean;
}

const ServicesCourtesy = () => {
  const servicesData: ServicesCourtesy[] = dataServicesCourtesy.data.servicesCourtesy;
  return (
    <div className='px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 mb-10'>
      <div className='flex flex-col items-center mt-5'>
        <h2 className='text-white text-2xl lg:text-3xl font-bold mb-4 text-center'>{dataServicesCourtesy.data.title}</h2>
        <h3 className='bg-yellow-400 inline-block py-2 px-4 rounded-lg text-base lg:text-xl font-bold mb-8 lg:mb-6 text-black'>{dataServicesCourtesy.data.subtitle}</h3>
      </div>
      <div className='flex flex-col items-center space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 lg:justify-center'>
        {servicesData.map(service =>(
          <div key={`service-${service.idService}`} className='w-full lg:w-[400px]'>
            <Image src={service.urlImagen} width={400} height={400} alt={service.title}/>
            <div className='bg-yellow-400 flex items-end py-4 px-8 justify-between'>
              <div>
                <h4 className='text-md font-extrabold text-black'>{service.title}</h4>
                <h5 className='text-[10px] font-semibold text-black'>{service.subtitle}</h5>
              </div>
              <div className='flex flex-row items-center'>
                <span className='text-[12px] font-semibold mr-1 text-black'>DETALLES</span>
                <ArrowDownTriangle className='relative bottom-[2px]'/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesCourtesy