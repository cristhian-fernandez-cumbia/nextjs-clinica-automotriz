/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import dataLogos from '@/api/logos.json'
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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

  const horary = [
    "8:00 - 10:00",
    "10:00 - 13:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "02:00 - 02:12",
    "02:14 - 02:30"
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
  return (
    <div className='flex justify-center items-center bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${dataLogos.data.urlImagen})`, backgroundPosition: 'top'}}>
      <div className='flex flex-col items-center bg-fuchsia-900 bg-opacity-60 w-[350px] my-8 lg:my-16 py-8 lg:py-10 rounded-xl lg:flex-row lg:w-[800px] lg:justify-center'>
        <div className='flex flex-col items-center mb-8 lg:mb-0 lg:mr-12'>
          <h2 className='text-yellow-400 text-3xl text-center font-extrabold mb-1'>VEHICULOS</h2>
          <h3 className='text-white text-xl text-center font-bold mb-3'>EN CITA 28/03/2024</h3>
          <div className='bg-yellow-400 hidden lg:inline-block rounded-lg py-2 px-10 text-center'>
            <p className='text-sm font-medium'>NUEVAS CITAS EN:</p>
            {/* <p className='text-xs font-extrabold'>00:01:25</p> */}
            <p className='text-xs font-extrabold'>{countdown}</p>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center mb-8 lg:mb-0 lg:py-8'>
          <div className='flex flex-col items-start'>
            <div className='bg-white rounded-full border-red-600 flex justify-center items-center w-20 h-20 relative'>
              <Image src={logosData[1].urlImagen} width={55} height={55} alt={logosData[1].name}/>
              <div style={{ width: 84, height: 84, position: 'absolute' }}>
                <CircularProgressbar
                  value={getRandomInteger(logosData[1].randomStart, logosData[1].randomEnd)}
                  strokeWidth={10}
                  styles={buildStyles({
                    rotation: 0,
                    pathColor: logosData[1].color,
                    trailColor: 'none',
                  })}
                />
              </div>
            </div>
            <div className='bg-white rounded-full border-red-600 flex justify-center items-center w-14 h-14 my-4 relative'>
              <Image src={logosData[2].urlImagen} width={40} height={40} alt={logosData[2].name}/>
              <div style={{ width: 60, height: 60, position: 'absolute' }}>
                <CircularProgressbar
                  value={getRandomInteger(logosData[2].randomStart, logosData[2].randomEnd)}
                  strokeWidth={10}
                  styles={buildStyles({
                    rotation: 0,
                    pathColor: logosData[2].color,
                    trailColor: 'none',
                  })}
                />
              </div>
            </div>
            <div className='bg-white rounded-full border-red-600 flex justify-center items-center w-20 h-20 relative'>
              <Image src={logosData[3].urlImagen} width={55} height={55} alt={logosData[3].name}/>
              <div style={{ width: 84, height: 84, position: 'absolute' }}>
                <CircularProgressbar
                  value={getRandomInteger(logosData[3].randomStart, logosData[3].randomEnd)}
                  strokeWidth={10}
                  styles={buildStyles({
                    rotation: 0,
                    pathColor: logosData[3].color,
                    trailColor: 'none',
                  })}
                />
              </div>
            </div>
          </div>
          <div>
            <div className='bg-white rounded-full border-red-600 flex justify-center items-center w-32 h-32 relative'>
              <Image src={logosData[0].urlImagen} width={60} height={60} alt={logosData[0].name}/>
              <div style={{ width: 140, height: 140, position: 'absolute' }}>
                <CircularProgressbar
                  value={getRandomInteger(logosData[0].randomStart, logosData[0].randomEnd)}
                  strokeWidth={10}
                  styles={buildStyles({
                    rotation: 0,
                    pathColor: logosData[0].color,
                    trailColor: 'none',
                  })}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-end'>
            <div className='bg-white rounded-full border-red-600 flex justify-center items-center w-20 h-20 relative'>
              <Image src={logosData[4].urlImagen} width={55} height={55} alt={logosData[4].name}/>
              <div style={{ width: 84, height: 84, position: 'absolute' }}>
                <CircularProgressbar
                  value={getRandomInteger(logosData[4].randomStart, logosData[4].randomEnd)}
                  strokeWidth={10}
                  styles={buildStyles({
                    rotation: 0,
                    pathColor: logosData[4].color,
                    trailColor: 'none',
                  })}
                />
              </div>
            </div>
            <div className='bg-white rounded-full border-red-600 flex justify-center items-center w-14 h-14 my-4'>
              <Image src={logosData[5].urlImagen} width={40} height={40} alt={logosData[5].name}/>
              <div style={{ width: 60, height: 60, position: 'absolute' }}>
                <CircularProgressbar
                  value={getRandomInteger(logosData[5].randomStart, logosData[5].randomEnd)}
                  strokeWidth={10}
                  styles={buildStyles({
                    rotation: 0,
                    pathColor: logosData[5].color,
                    trailColor: 'none',
                  })}
                />
              </div>
            </div>
            <div className='bg-white rounded-full border-red-600 flex justify-center items-center w-20 h-20 relative'>
              <Image src={logosData[6].urlImagen} width={55} height={55} alt={logosData[6].name}/>
              <div style={{ width: 84, height: 84, position: 'absolute' }}>
                <CircularProgressbar
                  value={getRandomInteger(logosData[6].randomStart, logosData[6].randomEnd)}
                  strokeWidth={10}
                  styles={buildStyles({
                    rotation: 0,
                    pathColor: logosData[6].color,
                    trailColor: 'none',
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-yellow-400 inline-block rounded-lg py-2 px-10 text-center lg:hidden'>
          <p className='text-sm font-medium'>NUEVAS CITAS EN:</p>
          <p className='text-xs font-extrabold'>{countdown}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCounter