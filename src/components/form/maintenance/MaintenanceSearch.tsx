import Button from '@/components/button/Button'
import React from 'react'
import sticker_servicio_automotriz from '@/assets/img/home/sticker_servicio_automotriz.png'
import Image from 'next/image'
import { Vehiculo } from '@/interface/home'
import { openWhatsApp } from '@/utils/functions'

interface MaintenanceSearchProps {
  vehiculo: Vehiculo | null;
}

const MaintenanceSearch: React.FC<MaintenanceSearchProps> = ({vehiculo}) => {
  const addSixMonths = (fecha: string): string => {
    const [day, month, year] = fecha.split('/');
    const newMonth = parseInt(month) + 6;
    const newYear = parseInt(year) + Math.floor(newMonth / 12);
    const formattedMonth = (newMonth % 12 || 12).toString().padStart(2, '0');
    return `${day}/${formattedMonth}/${newYear}`;
  };
  return (
    <div>
      {vehiculo ? (
        <div className='pt-[60px] pl-4 flex flex-col items-center'>
          <h2 className='font-piedra text-3xl font-bold text-black mb-6'>{`¡Qué alegría verlo por aquí Sr. ${vehiculo.nombre}!`}</h2>
          <div className='flex flex-row gap-5 mb-3 lg:mb-8 lg:pl-12 lg:pr-24'>
            <div className='flex flex-col lg:flex-row lg:gap-5'>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base text-black'>{vehiculo.placaVehiculo}</div>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base text-black'>{vehiculo.marca}</div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-5'>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base text-black'>{vehiculo.modelo}</div>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base text-black'>{vehiculo.ano}</div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-5 mb-4 lg:pl-12 lg:pr-24'>
            <div className='flex flex-row gap-5'>
              <div>
                <div className='font-bold text-sm text-center mb-2 text-black'>Última Visita</div>
                <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 text-sm lg:text-base text-black'>{vehiculo.ultimaVisita}</div>
              </div>
              <div>
                <div className='font-bold text-sm text-center mb-2 text-black'>Servicio Atendido</div>
                <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 text-sm lg:text-base text-black'>{vehiculo.servicio}</div>
              </div>
            </div>
            <div className='flex flex-row gap-5'>
              <div>
                <div className='font-bold text-sm text-center mb-2 text-black'>Próximo Fecha</div>
                <div className='border-2 border-yellow-300 lg:border-gray-300 min-w-32 text-center font-semibold py-1 text-sm lg:text-base text-black'>
                  {vehiculo.ultimaVisita ? addSixMonths(vehiculo.ultimaVisita) : '-'}
                </div>
              </div>
              <div>
                <div className='font-bold text-sm text-center mb-2 text-black'>Próximo KM</div>
                <div className='border-2 border-yellow-300 lg:border-gray-300 min-w-32 text-center font-semibold py-1 text-sm lg:text-base text-black'>
                  {isNaN(parseFloat(vehiculo.asKmInicial)) ? '-' : `${parseFloat(vehiculo.asKmInicial) + 10000} KM`}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row w-full justify-between mb-6 lg:mb-0'>
            <div className='flex justify-center lg:flex-none'>
              <Image src={sticker_servicio_automotriz} alt='sticker_servicio_automotriz' width={180} className='relative top-2 lg:top-7 ml-20 lg:ml-12'/>
            </div>
            <div className='flex flex-col items-center'>
              <Button className='bg-primary py-3 text-lg font-bold text-white rounded-lg hover:bg-red-700 hover:cursor-pointer lg:mt-10 w-52 mb-4 l:mb-0 mr-2' onClick={openWhatsApp}>SEPARAR CITA</Button>
              <div>
                <span className='text-xs font-bold relative top-[2px] lg:ml-2 text-black'>Nota:</span>
                <div className='text-xs lg:w-56 leading-[14px] lg:relative lg:left-2 text-black'>* Se recomienda cada 06 meses o cada 10 MIL KM</div>
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <div>Placa no encontrada</div>
      )}
    </div>
  )
}

export default MaintenanceSearch