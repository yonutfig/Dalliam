import React from "react";
import styled from "styled-components";
import laborImage from "../../Assets/Images/labor.png";
import calendarImage from "../../Assets/Images/calendar.png";
import bestPriceImage from "../../Assets/Images/best-price.png";
import supportImage from "../../Assets/Images/live-chat.png";
import guaranteeImage from "../../Assets/Images/guarantee-certificate.png";
import efficiencyImage from "../../Assets/Images/efficiency.png";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Manrope", Helvetica, Arial, sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: #ffffff;
  background-color: #ff6f61;
  border-radius: 8px;
  width: 200px;
  margin-top: 50px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SectionSubtitle = styled.h3`
  font-family: "Manrope", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 80px;
  color: #ff6f61;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SectionText = styled.p`
  font-family: "Manrope", Helvetica, Arial, sans-serif;
  font-size: 28px;
  color: #666;
  max-width: 700px;
  line-height: 1.8;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 auto;
  padding: 20px;
`;

const Column = styled.div`
  flex: 1 1 calc(33.333% - 16px);
  max-width: calc(33.333% - 16px);
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 16px);
    max-width: calc(50% - 16px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const RelativeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 60px;
  padding: 12px;
  margin-bottom: 12px;
  z-index: 2;
`;

const CircleDiv = styled.div`
  position: absolute;
  background-color: #ff6f61;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 12px;
`;

const Content = styled.div`
  font-family: "Manrope", Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-align: center;
`;

const Title = styled.h4`
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const SliderExtra = () => {
  return (
    <>
      <SliderContainer>
        <TextContainer id="Reasons">
          <SectionTitle>Top 6 Reasons</SectionTitle>
          <SectionSubtitle>Why Choose Us</SectionSubtitle>
          <SectionText>
            We prioritize your satisfaction and peace of mind with unmatched
            service, quality assurance, and transparent practices. Discover the
            reasons our clients trust us every time.
          </SectionText>
        </TextContainer>
        <Column>
          <RelativeDiv>
            <Image src={laborImage} alt="Expert Technicians" />
            <CircleDiv />
            <Content>
              <Title>Expert Technicians</Title>
              <Paragraph>
                Trust us to deliver reliable solutions, exceptional service.
              </Paragraph>
            </Content>
          </RelativeDiv>
        </Column>

        <Column>
          <RelativeDiv>
            <Image src={calendarImage} alt="Flexible Scheduling" />
            <CircleDiv />
            <Content>
              <Title>Flexible Scheduling</Title>
              <Paragraph>
                We deliver reliable, flexible solutions at your convenience.
              </Paragraph>
            </Content>
          </RelativeDiv>
        </Column>

        <Column>
          <RelativeDiv>
            <Image src={bestPriceImage} alt="Transparent Pricing" />
            <CircleDiv />
            <Content>
              <Title>Transparent Pricing</Title>
              <Paragraph>
                Clear, upfront pricing with no hidden costs.
              </Paragraph>
            </Content>
          </RelativeDiv>
        </Column>
        <Column>
          <RelativeDiv>
            <Image src={supportImage} alt="24/7 Support" />
            <CircleDiv />
            <Content>
              <Title>24/7 Support</Title>
              <Paragraph>We're here when you need us, day or night.</Paragraph>
            </Content>
          </RelativeDiv>
        </Column>

        <Column>
          <RelativeDiv>
            <Image src={guaranteeImage} alt="Satisfaction Guarantee" />
            <CircleDiv />
            <Content>
              <Title>Satisfaction Guarantee</Title>
              <Paragraph>
                We ensure quality and satisfaction with every service.
              </Paragraph>
            </Content>
          </RelativeDiv>
        </Column>

        <Column>
          <RelativeDiv>
            <Image src={efficiencyImage} alt="Efficiency" />
            <CircleDiv />
            <Content>
              <Title>Efficiency</Title>
              <Paragraph>
                We deliver fast, reliable results without compromising quality.
              </Paragraph>
            </Content>
          </RelativeDiv>
        </Column>
      </SliderContainer>
    </>
  );
};

export default SliderExtra;
