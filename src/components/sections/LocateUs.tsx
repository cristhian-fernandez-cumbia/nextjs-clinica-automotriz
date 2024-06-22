'use client'

import React, { useState, useEffect } from 'react';
import { ArrowLeftBold, ArrowRightBold } from '@/assets/icons';
import dataLocateUs from '@/api/locateUs.json';
import { Local } from '@/interface/home';
import dynamic from 'next/dynamic'; 
const ReactPlayerNoSSR = dynamic(() => import('react-player'), { ssr: false });

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
        height = 450;
      } else if (window.innerWidth >= 1024) {
        width = 600;
        height = 400;
      } else if (window.innerWidth >= 768) {
        width = 450;
        height = 320;
      } else {
        width = 300;
        height = 240;
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
          <h2 className='font-extrabold text-[33px] text-yellow-400 lg:text-[40px] lg:mt-9 lg:w-52 lg:text-left lg:relative lg:left-8 lg:z-10 leading-10 ' style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)' }}>NUESTRAS SEDES</h2>
          <h3 className='font-bold text-xl text-white uppercase mb-2 lg:text-[23px] lg:mt-1 lg:ml-1'>{locateUsData[currentImageIndex].district}</h3>
        </div>

        <div className='relative flex flex-col items-center'>
          <ReactPlayerNoSSR 
            url={locateUsData[currentImageIndex].urlVideo}
            width={imageDimensions.width}
            height={imageDimensions.height}
            controls={true}
            playing={true}
            loop={true}
            className='rounded-xl overflow-hidden'
          />
          
          <div className='flex flex-row justify-center mt-2 lg:mt-0'>
            <p className='font-semibold text-xs bg-green-600 text-white py-2 px-3 inline-block rounded-lg mr-2 lg:absolute lg:bottom-12 lg:right-14 lg:scale-150 lg:hidden'>
              {locateUsData[currentImageIndex].address}
            </p>
            <div className='bg-yellow-400 flex items-center lg:inline-block  py-1 px-2 rounded-lg mr-2 lg:absolute lg:bottom-12 lg:-left-16 lg:scale-150 ' onClick={handlePrevImage}>
              <ArrowLeftBold />
            </div>
            <div className='bg-yellow-400 flex items-center lg:inline-block py-1 px-2 rounded-lg lg:absolute lg:bottom-12 lg:-right-16 lg:scale-150' onClick={handleNextImage}>
              <ArrowRightBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocateUs;
