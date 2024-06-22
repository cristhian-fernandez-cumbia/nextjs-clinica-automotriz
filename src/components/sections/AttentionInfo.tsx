'use client'
import React, { useState } from 'react';
import attentions from '@/api/attencionInfo.json';
import { AttentionInfoProps } from '@/interface/home';
import dynamic from 'next/dynamic'; 
const ReactPlayerNoSSR = dynamic(() => import('react-player'), { ssr: false });

const AttentionInfo = () => {
  const [currentAttentionIndex, setCurrentAttentionIndex] = useState<number>(0);
  const attentionData: AttentionInfoProps[] = attentions.data.attentions;

  const handleClickDot = (index: number) => {
    setCurrentAttentionIndex(index);
  };

  return (
    <div className='flex flex-col items-center py-8 uppercase'>
      <div className='lg:hidden flex flex-col items-center'>
        <h2 className={`font-bold text-lg text-white bg-${attentionData[currentAttentionIndex].color}-600 inline-block py-1 px-3 rounded-lg mb-2`}>{attentionData[currentAttentionIndex].title}</h2>
        <h3 className='text-white font-extrabold text-3xl mb-2'>{attentionData[currentAttentionIndex].subtitle}</h3>
        <ReactPlayerNoSSR 
          url={attentionData[currentAttentionIndex].urlVideo}
          width={240}
          height={300}
          controls={true}
          playing={true}
          loop={true}
          muted={true}
          className='rounded-xl overflow-hidden'
        />
      </div>
      <div className='flex mt-4 flex-row items-center lg:hidden'>
        {attentionData.map((attention, index) => (
          <div
            key={`dot-${attention.idAttention}`}
            className={`dot ${currentAttentionIndex === index ? 'active' : ''}`}
            onClick={() => handleClickDot(index)}
          />
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-x-10">
        {attentionData.map((attention) => (
          <div key={`attention-${attention.idAttention}`} className="lg:w-1/3">
            <div className='flex flex-col items-center'>
              <h2 className={`font-bold text-lg text-black inline-block py-1 px-3 rounded-lg mb-2`} style={{backgroundColor:`${attention.color}`}}>{attention.title}</h2>
              <h3 className='text-white font-extrabold text-3xl mb-2 text-center w-72'>{attention.subtitle}</h3>
              <ReactPlayerNoSSR 
                url={attention.urlVideo}
                width={240}
                height={300}
                controls={true}
                playing={true}
                loop={true}
                muted={true}
                className='rounded-xl overflow-hidden'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttentionInfo;