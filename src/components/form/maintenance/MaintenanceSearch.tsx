import Button from '@/components/button/Button'
import React from 'react'
import sticker_servicio_automotriz from '@/assets/img/home/sticker_servicio_automotriz.png'
import Image from 'next/image'
import { Vehiculo } from '@/interface/home'

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
        <div className='pt-5 pl-4 pr-14 flex flex-col items-center'>
          <h2 className='text-2xl font-bold mb-6'>{`¡Qué alegría verlo por aquí Sr. ${vehiculo.nombre}!`}</h2>
          <div className='flex flex-row gap-5 mb-3 lg:mb-8'>
            <div className='flex flex-col lg:flex-row lg:gap-5'>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base'>VEHÍCULO</div>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base'>{vehiculo.placaVehiculo}</div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-5'>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base'>{vehiculo.marca}</div>
              <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 mb-3 lg:mb-0 text-sm lg:text-base'>{vehiculo.modelo}</div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-5 mb-4'>
            <div className='flex flex-row gap-5'>
              <div>
                <div className='font-bold text-sm text-center mb-2'>Última Visita</div>
                <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 text-sm lg:text-base'>{vehiculo.ultimaVisita}</div>
              </div>
              <div>
                <div className='font-bold text-sm text-center mb-2'>Servicio Atendido</div>
                <div className='border-2 border-gray-300 min-w-32 text-center font-medium py-1 text-sm lg:text-base'>{vehiculo.servicio}</div>
              </div>
            </div>
            <div className='flex flex-row gap-5'>
              <div>
                <div className='font-bold text-sm text-center mb-2'>Próximo Fecha</div>
                <div className='border-2 border-yellow-300 lg:border-gray-300 min-w-32 text-center font-semibold py-1 text-sm lg:text-base'>
                  {vehiculo.ultimaVisita ? addSixMonths(vehiculo.ultimaVisita) : '-'}
                </div>
              </div>
              <div>
                <div className='font-bold text-sm text-center mb-2'>Próximo KM</div>
                <div className='border-2 border-yellow-300 lg:border-gray-300 min-w-32 text-center font-semibold py-1 text-sm lg:text-base'>
                  {isNaN(parseFloat(vehiculo.asKmInicial)) ? '-' : `${parseFloat(vehiculo.asKmInicial) + 10000} KM`}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col-reverse lg:flex-row justify-between mb-6 lg:mb-0'>
            <div>
              <span className='text-xs font-bold relative top-[2px] lg:ml-16'>Nota:</span>
              <div className='text-xs lg:w-56 leading-[14px] lg:relative lg:left-16'>* Se recomienda cada 06 meses o cada 10 MIL KM</div>
            </div>
            <div className='flex flex-col items-center lg:flex-row'>
              <Image src={sticker_servicio_automotriz} alt='sticker_servicio_automotriz' width={180} className='relative top-2 lg:top-7 lg:mr-4'/>
              <Button className='bg-red-500 py-3 lg:py-0 lg:h-8 text-lg font-medium text-white px-6 rounded-lg hover:bg-red-600 hover:cursor-pointer lg:mt-10 w-72 mb-4 l:mb-0'>SEPARAR CITA</Button>
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