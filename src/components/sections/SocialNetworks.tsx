import React from 'react'
import Tiktok from './Tiktok'
import Facebook from './Facebook'
import Instagram from './Instagram'

export const SocialNetworks = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 mb-12 mt-10 gap-16 lg:gap-3 xl:gap-6'>
      <Instagram />
      <Tiktok />
      <Facebook />
    </div>
  )
}
