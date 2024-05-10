import React from 'react'
import { ServiceDetail } from '@/interface/home';
import Image from 'next/image';
import { ArrowDownTriangle } from '@/assets/icons';
import Button from '../button/Button';
import { openWhatsApp } from '@/utils/functions';

interface ServicesCardProps {
  detail: ServiceDetail;
  openModal: (content: ServiceDetail) => void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  detail,
  openModal
}) => {
  if (!detail) {
    return null;
  }
  const { name, fullname, urlImagen, main, label } = detail;

  return (
    <div className={` shadow-lg w-64 lg:w-80 h-[260px] lg:h-[335px] ${main ? 'bg-yellow-400 border-2 border-yellow-400' : 'bg-white'}`}>
      <div className='h-44 lg:h-[230px] overflow-hidden flex relative'>
        <Image src={urlImagen} width={320} height={250} alt={name}  loading="lazy"/>
        {main ? <span className='absolute bg-yellow-400 text-[10px] lg:text-xs top-2 left-2 px-2 py-1 rounded-sm font-bold'>{label}</span>: ''}
      </div>
      <div className='py-3 px-3 lg:px-4'>
        <h3 className="text-[13px] lg:text-[18px] font-bold text-center leading-4 lg:leading-5 h-[36px] flex justify-center items-center text-black">{fullname}</h3>
        <div className='mt-1 lg:mt-3 flex flex-row justify-between'>
          <div className='flex items-center hover:cursor-pointer' onClick={() => { openModal(detail)}}>
            <h3 className='text-[8px] lg:text-[13px] mr-[1px] lg:mr-1 font-medium text-black'>DETALLES</h3>
            <ArrowDownTriangle className='scale-75 lg:scale-100 relative -top-[2px]'/>
          </div>
          <Button className='border-2 border-primary text-[10px] lg:text-[13px] rounded-md px-1 lg:px-3 py-[2px] text-primary font-extrabold hover:cursor-pointer' onClick={openWhatsApp}>
            AGENDA TU CITA
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard