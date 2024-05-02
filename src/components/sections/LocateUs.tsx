'use client'
import React, { useState, useEffect } from 'react';
import { ArrowLeftBold, ArrowRightBold } from '@/assets/icons';
import dataLocateUs from '@/api/locateUs.json';
import Image from 'next/image';
import { Local } from '@/interface/home';

const LocateUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({ width: 300, height: 300 });
  const locateUsData: Local[] = dataLocateUs.data.locateUs;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === locateUsData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? locateUsData.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      let width, height;
      if (window.innerWidth >= 1280) {
        width = 800;
        height = 800;
      } else if (window.innerWidth >= 1024) {
        width = 600;
        height = 600;
      } else if (window.innerWidth >= 768) {
        width = 400;
        height = 400;
      } else {
        width = 300;
        height = 300;
      }
      setImageDimensions({ width, height });
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='text-center px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 mb-14 mt-8'>
      <div className='relative -top-36' id="locate-us"></div>
      <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-center'>
        <div>
          <h2 className='font-extrabold text-3xl text-yellow-400 lg:text-4xl lg:mt-5 lg:w-52 lg:text-left lg:relative lg:left-10 lg:z-10'>NUESTRAS SEDES</h2>
          <h3 className='font-bold text-xl text-white uppercase mb-2 lg:text-2xl lg:mt-1 lg:ml-5'>{locateUsData[currentImageIndex].district}</h3>
        </div>

        <div className='relative flex flex-col items-center'>
          <Image
            src={locateUsData[currentImageIndex].urlImagen}
            alt={locateUsData[currentImageIndex].urlImagen}
            className='mb-4'
            width={imageDimensions.width}
            height={imageDimensions.height}
          />
          <div className='flex flex-row justify-center'>
            <p className='font-semibold text-xs bg-green-600 text-white py-2 px-3 inline-block rounded-lg mr-2 lg:absolute lg:bottom-12 lg:right-14 lg:scale-150'>
              {locateUsData[currentImageIndex].address}
            </p>
            <div className='bg-yellow-400 inline-block py-1 px-2 rounded-lg mr-2 lg:absolute lg:bottom-12 lg:-left-16 lg:scale-150' onClick={handlePrevImage}>
              <ArrowLeftBold />
            </div>
            <div className='bg-yellow-400 inline-block py-1 px-2 rounded-lg lg:absolute lg:bottom-12 lg:-right-16 lg:scale-150' onClick={handleNextImage}>
              <ArrowRightBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
