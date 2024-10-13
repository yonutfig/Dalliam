import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import fgas from "../Assets/Images/fgas.jpg";
import gasSafe from "../Assets/Images/gasSafe.png";
import mcs from "../Assets/Images/mcs.png";

const FullWidthImageSection = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
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
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: left;
  z-index: 1;
  margin-top: 150px;
  user-select: none;
  margin-left: 200px;
`;

const ButtonContainer = styled.div`
  margin-left: 200px;

  z-index: 1;
`;

const ServiceButton = styled(Link)`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 88vw;
  max-width: 1200px;
  padding: 20px;
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
  }

  p {
    line-height: 1.6;
    font-size: 1.1rem;
    color: #555;
    font-weight: 500;
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

const CertificationImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const CertificationImage = styled.img`
  height: 150px;
  width: auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactUsWrapper = styled.div`
  width: 100%;
  height: 785px;
  margin-bottom: 100px;
`;

const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: "Heat Pumps & AC Systems",
      details:
        "Choose our expert design and installation services for heat pumps and air conditioning systems that guarantee comfort in your home. Experience unparalleled efficiency and reliability, ensuring that your investment pays off in energy savings and lasting performance.",
      icon: <FaSnowflake />,
      area: "service1",
    },
    {
      name: "Underfloor Heating Systems",
      details:
        "Transform your living space with our underfloor heating systems. We offer bespoke solutions that enhance comfort and optimize energy consumption, backed by expert installation and exceptional service. Invest in your comfort with our trusted expertise.",
      icon: <FaTools />,
      area: "service2",
    },
    {
      name: "Service & Repair",
      details:
        "Trust our skilled technicians for comprehensive servicing and repairs of your heating and cooling systems. We ensure optimal performance and reliability, helping you avoid unexpected breakdowns and costly repairs in the future.",
      icon: <FaHeartbeat />,
      area: "service3",
    },
    {
      name: "Maintenance",
      details:
        "Preventive maintenance is key to long-term performance. Our regular maintenance services keep your systems running efficiently, ensuring a longer lifespan and lower energy bills. Count on us to keep your home comfortable year-round.",
      icon: <FaHome />,
      area: "service4",
    },

    {
      name: "Certifications",
      details:
        "We are certified professionals offering gas safety certifications and more.",
      icon: <FaCertificate />,
      area: "service5",
      certificationLinks: [
        {
          src: fgas,
          alt: "FGAS Certification",
          url: "https://fgasregister.com/",
        },
        {
          src: gasSafe,
          alt: "Gas Safe Certification",
          url: "https://www.gassaferegister.co.uk/",
        },
        {
          src: mcs,
          alt: "MCS Certification",
          url: "https://mcscertified.com/",
        },
      ],
    },
  ];

  const openModal = (service) => {
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
        <div>
          <Title>Services</Title>
          <ButtonContainer>
            <ServiceButton to="/">Home</ServiceButton>
            <span
              style={{
                fontSize: "20px",
                color: "#e55d50",
                fontWeight: "bold",
                userSelect: "none",
              }}
            >
              {" "}
              {">"}Services
            </span>
          </ButtonContainer>
        </div>
      </FullWidthImageSection>
      <ServicesSection>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.name} style={{ gridArea: service.area }}>
              <IconContainer className="icon-container">
                {service.icon}
              </IconContainer>
              <ServiceTitle>{service.name}</ServiceTitle>
              <ServiceDescription>
                {service.details.substring(0, 55)}...
              </ServiceDescription>
              <ReadMoreButton onClick={() => openModal(service)}>
                Read More
              </ReadMoreButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService?.name}</h2>
            <p>{selectedService?.details}</p>
            {selectedService?.name === "Certifications" && (
              <CertificationImagesContainer>
                {selectedService.certificationLinks.map((cert, index) => (
                  <Link
                    key={index}
                    to={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CertificationImage src={cert.src} alt={cert.alt} />
                  </Link>
                ))}
              </CertificationImagesContainer>
            )}
            <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
      <ContactUsWrapper>
        <ContactUs />
      </ContactUsWrapper>
      <Footer />
    </>
  );
};

export default Services;
