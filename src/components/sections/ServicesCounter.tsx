/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import dataLogos from '@/api/logos.json'
// import Image from 'next/image';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Logos {
  idLogo: number;
  urlImagen: string;
  name: string;
  color: string;
  randomStart: number;
  randomEnd: number;
  active: boolean;
}

const ServicesCounter = () => {
  const logosData: Logos[] = dataLogos.data.logos;
  const [countdown, setCountdown] = useState<string>('');
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    './assets/images/extra_clinica_automotriz.png',
    './assets/images/extra_clinica_automotriz_2.png'
  ];

  const horary = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 14:00",
    // "14:00 - 16:00",
    "16:00 - 18:00"
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minutes = now.getMinutes();

      let remainingTime = '';

      let isOpen = false;
      for (const range of horary) {
        const [start, end] = range.split(' - ');
        const [startHour, startMinute] = start.split(':').map(num => parseInt(num, 10));
        const [endHour, endMinute] = end.split(':').map(num => parseInt(num, 10));
        
        if (hour > startHour || (hour === startHour && minutes >= startMinute)) {
          if (hour < endHour || (hour === endHour && minutes < endMinute)) {
            isOpen = true;
            const endTime = new Date(now);
            endTime.setHours(endHour);
            endTime.setMinutes(endMinute);
            endTime.setSeconds(0);
            const diff = endTime.getTime() - now.getTime();
            const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
            const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
            remainingTime = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
            break;
          }
        }
      }

      if (!isOpen) {
        remainingTime = 'Cerrado';
      }

      setCountdown(remainingTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const  getRandomInteger = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative'>
      <div className='absolute w-full h-40 -top-24 '>
        <div className='absolute inset-0 bg-gradient-to-t from-transparent via-gray-700 to-transparent'></div>
      </div>

      {/* <div className='flex justify-center items-center bg-cover bg-center bg-no-repeat relative mb-20' style={{backgroundImage: `url(${dataLogos.data.urlImagen})`, backgroundPosition: 'top'}}> */}
      <div 
        className='flex justify-center items-center bg-cover bg-center bg-no-repeat relative mb-20 image-container' 
        style={{ backgroundImage: `url(${images[currentImage]})`, backgroundPosition: 'top' }}
      >
        <div className='w-52 h-[850px]'></div>
      </div>
      <div className='absolute w-full h-40 bottom-5'>
        <div className='absolute inset-0 bg-gradient-to-t from-transparent via-gray-500 to-transparent'></div>
      </div>
    </div>
  )
}

export default ServicesCounter