/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect } from 'react';
import services from '@/api/services.json';
import servicesDetail from '@/api/servicesDetail.json';
import { ArrowLeftBold, ArrowRightBold } from '@/assets/icons';
import ServicesCard from '../card/ServicesCard';
import { Service, ServiceDetail } from '@/interface/home';
import Modal from '@/components/modal/Modal';
import ModalServicesCard from '../modal/ModalServicesCard';

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service>();
  const [allServiceDetails, setAllServiceDetails] = useState<ServiceDetail[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ServiceDetail>();

  useEffect(() => {
    if (services.data.services.length > 0) {
      selectService(services.data.services[0]);
    }
  }, []);

  const selectService = (service: Service) => {
    setSelectedService(service);
    setAllServiceDetails(servicesDetail.data.servicesDetail);
    const indexActual = allServiceDetails.find(detail => detail.idService === service.idService)
    setCurrentIndex(indexActual ? indexActual.idServiceDetail - 1 : 0);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      if(prevIndex === 0){
        setSelectedService(services.data.services[allServiceDetails[allServiceDetails.length - 1].idService - 1])
        return allServiceDetails.length - 1
      } else {
        setSelectedService(services.data.services[allServiceDetails[prevIndex - 1].idService - 1])
        return prevIndex - 1
      }
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      if(prevIndex === allServiceDetails.length - 1){
        setSelectedService(services.data.services[allServiceDetails[0].idService - 1])
        return 0
      } else {
        setSelectedService(services.data.services[allServiceDetails[prevIndex + 1].idService - 1])
        return prevIndex + 1
      }
    });
  };

  const visibleServiceDetails = [
    allServiceDetails[(currentIndex - 1 + allServiceDetails.length) % allServiceDetails.length],
    allServiceDetails[currentIndex],
    allServiceDetails[(currentIndex + 1) % allServiceDetails.length],
  ];

  const openModal = (content: ServiceDetail) => {
    setModalOpen(true);
    setModalContent(content);
    console.log('modalcontent::', modalContent)
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="px-0 md:px-16 lg:px-24 xl:px-36 2xl:px-44 mb-10">
        <h2 className="text-white font-bold mt-4 text-center text-2xl lg:text-3xl">NUESTROS SERVICIOS</h2>
        <div className="flex mt-4 flex-row justify-center">
          <button className="pr-3 pl-2 lg:px-4 py-2 text-white" onClick={handlePrevClick}>
            <ArrowLeftBold fill='red'/>
          </button>
          <div className="flex flex-col overflow-hidden items-center">
            <div className="flex justify-center">
              {services.data.services.map((service: Service) => (
                <button
                  key={service.idService}
                  className={`px-4 py-2 text-white border-4 border-primary mr-10 font-bold rounded-lg ${selectedService === service ? 'bg-primary' : 'bg-transparent'}`}
                  onClick={() => selectService(service)}
                >
                  {service.name}
                </button>
              ))}
            </div>
            <div className="mt-10 flex flex-nowrap justify-center pb-14 lg:mt-14">
              {visibleServiceDetails.map((detail: ServiceDetail, index) => (
                <div
                  key={`ServiceDetail-${index}`}
                  className={`w-1/3 mx-1 lg:mx-4 ${index === 1 ? 'scale-100 z-10' : 'scale-75'}`}
                >
                  <ServicesCard detail={detail} openModal={openModal} />
                </div>
                
              ))}
            </div>
          </div>
          <button className="pr-3 pl-2 lg:px-4 py-2 text-white" onClick={handleNextClick}>
            <ArrowRightBold fill='red'/>
          </button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}  
        style={{ 
          background: `linear-gradient(to left, ${modalContent?.bgColor ? modalContent.bgColor : '#FDDA04'} -20%, white 95%)` 
        }}
      >
        {modalContent && <ModalServicesCard {...modalContent}/>}
      </Modal>

    </>
  );
};

export default Services;
