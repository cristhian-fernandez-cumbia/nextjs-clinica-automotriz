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
    const filteredDetails = servicesDetail.data.servicesDetail.filter(detail => detail.idService === service.idService);
    setAllServiceDetails(filteredDetails);
    setCurrentIndex(0);
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

  const visibleServiceDetails = [];

  if (allServiceDetails.length === 1) {
    visibleServiceDetails.push(allServiceDetails[0]);
  } else if (allServiceDetails.length === 2) {
    visibleServiceDetails.push(allServiceDetails[0], allServiceDetails[1]);
  } else {
    visibleServiceDetails.push(
      allServiceDetails[currentIndex],
      allServiceDetails[(currentIndex + 1) % allServiceDetails.length],
      allServiceDetails[(currentIndex + 2) % allServiceDetails.length]
    );
  }

  const openModal = (content: ServiceDetail) => {
    setModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="px-0 md:px-16 lg:px-24 xl:px-36 2xl:px-44 mb-10">
        <h2 className="text-white font-bold text-center text-2xl lg:text-3xl">NUESTROS SERVICIOS</h2>
        <div className="flex mt-6 flex-row justify-center">
          <button className="pr-3 pl-2 lg:px-4 py-2 text-white" onClick={handlePrevClick}>
            <ArrowLeftBold fill='red'/>
          </button>
          <div className="flex flex-col overflow-hidden items-center" >
            <div className="flex justify-between overflow-x-auto whitespace-nowrap" style={{ maxWidth: "100%", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
                  className={`mx-1 lg:mx-4 ${index === 1 ? 'scale-100 z-10' : 'scale-75'}`}
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
