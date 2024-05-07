import Image from 'next/image'
import React from 'react'
import logoTiktok from '@/assets/img/home/logo_titkok.png'
import Button from '../button/Button'

const Tiktok = () => {
  return (
    <div className='flex justify-center px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 mb-12 mt-10' id='tiktok'>
      <div className='bg-white flex justify-center flex-col rounded-lg  py-6  w-full lg:w-[800px]'>
        <div className='flex justify-center items-center mb-3'>
          <Image src={logoTiktok} alt='logoTiktok' width={80} height={80}/>
          <div className='ml-4'>
            <h2 className='font-bold mb-2'>@clinica.automotriz</h2>
            <div className='flex'>
              <div>
                <p className='font-bold'>1684</p>
                <p className='text-xs text-gray-500'>Following</p>
              </div>
              <div className='ml-4'>
                <p className='font-bold'>374.8K</p>
                <p className='text-xs text-gray-500'>Followers</p>
              </div>
              <div className='ml-4'>
                <p className='font-bold'>1.5M</p>
                <p className='text-xs text-gray-500'>Likes</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mb-4'>
          <p className='text-sm lg:text-base'>Taller Automotriz mutimarcas 😎</p>
          <p className='text-sm lg:text-base'>¡Atención con previa cita!</p>
        </div>
        <div className='flex justify-center'>
          <Button className="bg-primary text-white px-10 py-2 rounded-lg  hover:bg-red-800 font-bold">Open Tiktok</Button>
        </div>
      </div>
    </div>
  )
}

export default Tiktok