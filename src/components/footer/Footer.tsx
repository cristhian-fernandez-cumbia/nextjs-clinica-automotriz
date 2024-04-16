import React from 'react'
import sticker_footer from '@/assets/img/home/sticker_clinica_automotriz_preferencia.png'
import Image from 'next/image'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon, WhatsappIcon } from '@/assets/icons'

const Footer = () => {
  return (
    <div className='bg-yellow-400 text-center flex flex-col lg:flex-row overflow-hidden px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 lg:justify-between'>
      <div>
        <div className='mt-16 mb-6 lg:mt-10'>
          <h2 className='font-extrabold text-xl text-glow'>¿DESEAS CONSULTAR</h2>
          <h2 className='font-medium text-xl text-glow'>DIRECTAMENTE?</h2>
        </div>
        <div className='flex justify-center'>
          <WhatsappIcon className='mr-1'/>
          <p className='font-bold mb-4'>+51 941 605 353</p>
        </div>
      </div>
      <Image src={sticker_footer} alt='sticker_clinica_automotriz_preferencia' width={250} className='relative -bottom-5 hidden lg:block mx-4'/>
      <div className='flex flex-col items-center'>
        <div className='mb-3 lg:mt-10'>
          <h3 className='font-extrabold'>SEDE CHORRILLOS</h3>
          <p className='text-[12px]'>Jr. Teniente Carlos Jimenez Chavez 339A</p>
        </div>
        <div>
          <h3 className='font-extrabold'>SEDE LOS OLIVOS</h3>
          <p className='text-[12px]'>C. Sta. Angélica 216, San Martín de Porres 15314</p>
        </div>
        <div className='flex items-end'>
          <Image src={sticker_footer} alt='sticker_clinica_automotriz_preferencia' width={250} className='relative -bottom-5 lg:hidden'/>
          <div className='flex flex-col items-center relative w-64 lg:w-auto right-16 lg:right-0'>
            <div className="grid grid-cols-2 gap-3 w-24 mb-4 lg:flex lg:mt-6">
              <div className="flex justify-center items-center">
                <FacebookIcon className="w6 h-6" />
              </div>
              <div className="flex justify-center items-center">
                <TiktokIcon className="w-6 h-6" />
              </div>
              <div className="flex justify-center items-center">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="flex justify-center items-center">
                <LinkedinIcon className="w-6 h-6" />
              </div>
            </div>
            <div className='text-sm mb-5 w-56 lg:flex lg:w-80 lg:text-[11px]'>
              <p className='lg:mr-1'>Copyright ©️ Caleand 2024 -</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer