'use client'
import React from 'react'
import sticker_footer from '@/assets/img/home/sticker_clinica_automotriz_preferencia.png'
import Image from 'next/image'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon, WhatsappIcon } from '@/assets/icons'
import { openLink, openWhatsApp } from '@/utils/functions'

const Footer = () => {
  let chorrillos = 'https://maps.app.goo.gl/nMNUvjsYpyyZr2qr5';
  let olivos = 'https://maps.app.goo.gl/TBAMFPxDrTRHE6mq9';
  return (
    <div className='bg-yellow-400 text-center flex flex-col lg:flex-row overflow-hidden px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 lg:justify-between'>
      <div>
        <div className='mt-16 mb-6 lg:mt-10'>
          <h2 className='font-extrabold text-xl text-glow'>¿DESEAS CONSULTAR</h2>
          <h2 className='font-medium text-xl text-glow'>DIRECTAMENTE?</h2>
        </div>
        <div className='flex justify-center cursor-pointer' onClick={openWhatsApp}>
          <WhatsappIcon className='mr-1'/>
          <p className='font-bold mb-4 text-black'>+51 941 605 353</p>
        </div>
      </div>
      <Image src={sticker_footer} alt='sticker_clinica_automotriz_preferencia' width={250} className='relative -bottom-5 hidden lg:block mx-4'/>
      <div className='flex flex-col items-center'>
        <div className='mb-3 lg:mt-10 cursor-pointer' onClick={()=>{openLink(chorrillos)}}>
          <h3 className='font-extrabold text-black'>SEDE CHORRILLOS</h3>
          <p className='text-[13px] text-black'>Jr. Teniente Carlos Jimenez Chavez 339A</p>
        </div>
        <div onClick={()=>{openLink(olivos)}} className='cursor-pointer'>
          <h3 className='font-extrabold text-black'>SEDE LOS OLIVOS</h3>
          <p className='text-[13px] text-black'>C. Sta. Angélica 216, San Martín de Porres 15314</p>
        </div>
        <div className='flex items-end'>
          <Image src={sticker_footer} alt='sticker_clinica_automotriz_preferencia' width={250} className='relative -bottom-5 lg:hidden'/>
          <div className='flex flex-col items-center relative w-64 lg:w-auto right-16 lg:right-0'>
            <div className="grid grid-cols-2 gap-3 w-24 mb-4 lg:flex lg:mt-6">
              <div className="flex justify-center items-center cursor-pointer" onClick={()=>{openLink('https://www.facebook.com/clinicautomotrizoficial')}}>
                <FacebookIcon className="w6 h-6" />
              </div>
              <div className="flex justify-center items-center cursor-pointer" onClick={()=>{openLink('https://www.tiktok.com/@clinicautomotrizoficial')}}>
                <TiktokIcon className="w-6 h-6" />
              </div>
              <div className="flex justify-center items-center cursor-pointer" onClick={()=>{openLink('https://www.instagram.com/clinicautomotrizoficial')}}>
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="flex justify-center items-center cursor-pointer" onClick={()=>{openLink('https://www.linkedin.com/company/clinica-automotriz-sac/')}}>
                <LinkedinIcon className="w-6 h-6" />
              </div>
            </div>
            <div className='text-sm mb-5 w-56 lg:flex lg:w-80 lg:text-[11px] text-black'>
              <p className='lg:mr-1 '>Copyright ©️ Caleand 2024 -</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer