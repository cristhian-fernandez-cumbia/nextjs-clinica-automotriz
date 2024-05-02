import React from 'react'
import { ServiceDetail } from '@/interface/home';
import Image from 'next/image';
import Button from '../button/Button';

const ModalServicesCard: React.FC<ServiceDetail> = ({
  urlImagen,
  fullname,
  description
}) => {
  return (
    <div className='flex p-3 flex-col lg:flex-row w-80 md:w-[450px] lg:w-full'>
      <div className='mb-3 mt-2 lg:mr-5 lg:mb-0'>
        <Image src={urlImagen} width={450} height={100} alt={fullname} className='rounded-md'/>
      </div>
      <div className='flex flex-col w-full lg:w-96 '>
        <h2 className='text-2xl lg:text-3xl font-bold'>{fullname}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} className='text-sm'/>
        <div className='flex justify-center lg:justify-start'>
          <Button className='bg-red-600 text-white px-8 py-1 rounded-md mt-4'>
            SEPARAR CITA
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ModalServicesCard