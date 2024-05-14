'use client'
import React, { useState, useEffect } from 'react';
import styles from './../../styles/banner.module.css';
import Maintenance from '../form/maintenance/Maintenance';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    './assets/images/portada_clinica_automotriz_01.png',
    './assets/images/portada_clinica_automotriz_02.png',
    './assets/images/portada_clinica_automotriz_03.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className={`${styles.image_banner} relative flex items-center lg:items-start justify-between flex-col-reverse lg:flex-row lg:py-44 px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-44 mt-[70px] lg:mt-0`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <Maintenance />
        <h2 className='text-center text-[24px] lg:text-right lg:text-[40px] sm:w-[480px] 2xl:text-[45px] 2xl:w-[600px] font-bold text-white z-10 leading-8 lg:leading-10 2xl:leading-[3rem] pt-10 mb-12 lg:pt-0 lg:mb-0'>
          <div className='lg:hidden'>
            <div>TEN EL <span className='text-primary'>CONTROL</span></div> DE LA <span className='text-primary'>VIDA</span> DE TU VEHÍCULO
          </div>
          <div className='hidden lg:block'>
            TEN EL <span className='text-primary mr-2'>CONTROL</span> DE LA <span className='text-primary'>VIDA</span> DE TU VEHÍCULO
          </div>
        </h2>
      </div>
      <div className="h-72 lg:hidden"></div>
      <div id='services' className='relative -top-20'></div>
    </>
  );
}

export default Banner;
