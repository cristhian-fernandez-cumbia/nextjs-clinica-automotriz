import React from 'react'
import { ServiceDetail } from '@/interface/home';
import Image from 'next/image';
import { ArrowDownTriangle } from '@/assets/icons';
import Button from '../button/Button';

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
    <div className={` shadow-lg w-40 lg:w-60 h-[195px] lg:h-[270px] ${main ? 'bg-yellow-400 border-2 border-yellow-400' : 'bg-white'}`}>
      <div className='h-28 lg:h-40 overflow-hidden flex relative'>
        <Image src={urlImagen} width={240} height={160} alt={name}  loading="lazy"/>
        {main ? <span className='absolute bg-yellow-400 text-[10px] lg:text-xs top-2 left-2 px-2 py-1 rounded-sm font-bold'>{label}</span>: ''}
      </div>
      <div className='py-2 px-2 lg:px-4'>
        <h3 className="text-[11px] lg:text-[15px] font-semibold text-center leading-3 lg:leading-4 h-[36px] flex justify-center items-center">{fullname}</h3>
        <div className='mt-1 lg:mt-3 flex flex-row justify-between'>
          <div className='flex items-center hover:cursor-pointer' onClick={() => { openModal(detail)}}>
            <h3 className='text-[8px] lg:text-[9px] mr-[1px] lg:mr-1 font-medium'>DETALLES</h3>
            <ArrowDownTriangle className='scale-75 lg:scale-100 relative -top-[1px]'/>
          </div>
          <Button className='border-2 border-red-500 text-[8px] lg:text-[9px] rounded-md px-1 lg:px-3 py-[2px] text-red-500 font-bold hover:cursor-pointer'>
            AGENDA TU CITA
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard