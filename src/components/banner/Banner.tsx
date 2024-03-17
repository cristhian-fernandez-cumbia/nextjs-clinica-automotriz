import React from 'react'
import styles from './../../styles/banner.module.css';

const Banner = () => {
  const onClick = ()=>{
    const urlWhatsapp = 'https://wa.link/gdk7sm';
    window.open(urlWhatsapp);
  }
  return (
    <div className={`${styles.image_banner} relative flex items-center justify-center flex-col lg:flex-row py-44`}>
      <div className='mx-10 text-white'>
        <h1 className="text-5xl md:text-5xl font-bold">NO PAGUES MÁS SIN ANTES ENCONTRAR LA FALLA EN TU VEHÍCULO</h1>
        <p className='text-2xl mt-2'>En Clínica Automotriz somos especialistas en diagnóstico, reparación y mantenimiento.</p>
      </div>
      <div className='mx-10 rounded-tr-2xl rounded-bl-2xl bg-black mt-5 text-white p-8 text-center'>
        <h2 className='text-xl font-bold mb-2'>¿QUIERES CONSERVAR LA VIDA ÚTIL DE TU VEHÍCULO?</h2>
        <p className='text-lg mb-2'>¡Genial!, Dale clic al botón y agenda tu cita.</p>
        <button 
          className="bg-red-600 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl hover:text-red-600 hover:bg-white font-bold"
          onClick={onClick}
        >Agendar cita</button>
      </div>
    </div>
  )
}

export default Banner