'use client'
import Image from 'next/image'
import React from 'react'
import logoTiktok from '@/assets/img/home/logo_titkok.png'
import Button from '../button/Button'
import { openLink } from '@/utils/functions'
import { FacebookLogo } from '@/assets/icons'

const Facebook = () => {
  return (
    <div className='bg-white flex justify-center flex-col rounded-lg  py-10 px-6 w-80 relative' id='tiktok'>
      <FacebookLogo className='absolute -top-12 left-32'/>
      <div className='flex justify-center items-center mb-8 lg:scale-75 xl:scale-100'>
        <Image src={logoTiktok} alt='logoTiktok' width={80} height={80}/>
        <div className='ml-4'>
          <h2 className='font-bold mb-2 text-black'>@clinica.automotriz</h2>
          <div className='flex'>
            <div>
              <p className='font-bold text-black'>213 MIL</p>
              <p className='text-xs text-gray-500'>Seguidores</p>
            </div>
            <div className='ml-4'>
              <p className='font-bold text-black'>42.4 MILK</p>
              <p className='text-xs text-gray-500'>Me gusta</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button className="bg-[#4486FE] text-white px-10 py-2 rounded-lg  hover:bg-[#154fbb] font-bold" onClick={()=>{openLink('https://www.facebook.com/clinicautomotrizoficial')}}>Open Facebook</Button>
      </div>
    </div>
  )
}

export default Facebook