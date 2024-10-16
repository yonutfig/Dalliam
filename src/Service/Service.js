import React, { useState } from "react";
import styled from "styled-components";
import ServiceNavbar from "./services-navbar";
import Footer from "../Components/Footer/Footer";
import Meeting from "../Assets/Images/meeting.jpg";
import Header from "./Header";
import {
  FaSnowflake,
  FaTools,
  FaHome,
  FaHeartbeat,
  FaCertificate,
} from "react-icons/fa";
import ContactUs from "../Components/ContactForm/ContactUs";

const FullWidthImageSection = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 50px;
  padding-bottom: 30px;
  color: #fff;
  background-image: url(${Meeting});
  background-position: center 30%;
  background-size: cover;
  margin-top: 20px;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(229, 93, 80, 0.4);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 40vh;
    padding-left: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 940px) and (max-height: 440px) {
    width: auto;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: left;
  z-index: 1;
  margin: 0;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  width: 100%;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  text-align: center;
  width: 300px;
  height: 280px;
  transition: color 0.7s ease, transform 0.6s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e55a53;
    transform: translateX(-100%);
    transition: transform 0.7s ease;
    z-index: 0;
  }

  &:hover::before {
    transform: translateX(0);
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.7s ease;
  }

  &:hover {
    color: white;
    transform: scale(1.05);
  }

  &:hover > h3,
  &:hover > p {
    color: white;
  }
`;

const ServiceTitle = styled.h3`
  color: #e55a53;
  margin: 0;
  font-size: 1.6rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #555;
  margin-top: 10px;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: center;
`;

const IconContainer = styled.div`
  font-size: 60px;
  margin-bottom: 10px;
  color: #e55a53;
  transition: color 0.7s ease;

  ${ServiceCard}:hover & {
    color: white;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80vw;
  max-width: 600px;
  text-align: center;

  h2 {
    margin-bottom: 15px;
    font-size: 1.8rem;
    color: #333;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    line-height: 1.6;
    font-size: 1.1rem;
    color: #555;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ModalCloseButton = styled.button`
  background: #e55a53;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c74641;
  }
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #e55a53;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  margin-top: auto;
  transition: color 0.3s;

  ${ServiceCard}:hover & {
    color: white;
  }
`;

const ContactUsWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

const FooterContent = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 10px;
    flex-direction: column;
    align-items: center;
  }
`;

const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: "Heat Pumps & AC Systems",
      details:
        "Choose our expert design and installation services for heat pumps and air conditioning systems that guarantee comfort in your home. Experience unparalleled efficiency and reliability, ensuring that your investment pays off in the long run.",
      icon: <FaSnowflake />,
    },
    {
      name: "General Repairs & Maintenance",
      details:
        "Our skilled technicians provide comprehensive repair and maintenance services for all heating and cooling systems. We ensure that your equipment operates efficiently, prolonging its lifespan and saving you money on energy bills.",
      icon: <FaTools />,
    },
    {
      name: "Furnaces & Boiler Installation",
      details:
        "Let our professionals handle the installation of furnaces and boilers to provide efficient heating for your property. We ensure the proper selection and sizing of equipment to meet your specific needs.",
      icon: <FaHome />,
    },
    {
      name: "Emergency Services",
      details:
        "Count on us for reliable emergency heating and cooling services whenever you need assistance. Our team is available 24/7 to provide fast solutions to restore your comfort.",
      icon: <FaHeartbeat />,
    },
    {
      name: "Energy Efficiency Certifications",
      details:
        "Achieve energy efficiency certifications with our expert guidance. We help you understand the requirements and process to achieve certifications that can reduce energy costs and improve sustainability.",
      icon: <FaCertificate />,
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <Header />
      <ServiceNavbar />
      <FullWidthImageSection>
        <Title>Our Services</Title>
      </FullWidthImageSection>
      <ServicesSection>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              onClick={() => handleServiceClick(service)}
            >
              <IconContainer>{service.icon}</IconContainer>
              <ServiceTitle>{service.name}</ServiceTitle>
              <ServiceDescription>
                {service.details.substring(0, 60)}...
              </ServiceDescription>
              <ReadMoreButton onClick={() => handleServiceClick(service)}>
                Read More
              </ReadMoreButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>
      <ContactUsWrapper>
        <ContactUs />
      </ContactUsWrapper>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>{selectedService.name}</h2>
            <p>{selectedService.details}</p>
            <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
      <FooterWrapper>
        <FooterContent>
          <Footer />
        </FooterContent>
      </FooterWrapper>
    </>
  );
};

export default Services;
