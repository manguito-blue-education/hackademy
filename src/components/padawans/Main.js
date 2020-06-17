import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { slideTexts, slideImages } from "../../data/padawansMainData";
import { navigate } from "gatsby";

export const Main = () => {
  const slides = [0, 0, 0];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  const createText = ({ heading, paragraphOne, paragraphTwo }) => (
    <>
      <h2>{heading}</h2>
      <div>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
      </div>
    </>
  );

  return (
    <PadawansMain>
      <TextSection>
        <TextWrapper>
          <TextContainer>
            {createText(slideTexts[currentIndex])}
            <MoreWrapper>
              <strong>Saber más</strong>
              <MoreBtn onClick={() => navigate("/padawans/about-us")}>
                <img src="/more-arrow.svg" alt="Flecha botón para saber más " />
              </MoreBtn>
            </MoreWrapper>
          </TextContainer>
        </TextWrapper>
      </TextSection>
      <CarouselImages>
        <CarouselImage
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src={slideImages[currentIndex]}
          alt={`Imagen ${currentIndex + 1} del slider`}
        />
      </CarouselImages>
      <CarouselController>
        <SliderButtonsWrapper>
          <SliderButton
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + slides.length) % slides.length
              )
            }
          >
            <img
              src="/previous-slider-arrow.svg"
              alt="Flecha para imagen previa del slider"
            />
          </SliderButton>
          <SliderButton
            onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
          >
            <img
              src="/next-slider-arrow.svg"
              alt="Flecha para siguiente imagen del slider"
            />
          </SliderButton>
        </SliderButtonsWrapper>
      </CarouselController>
    </PadawansMain>
  );
};

const PadawansMain = styled.main`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: minmax(600px, 1fr) minmax(450px, 660px) 170px;
  background: var(--main-black);
  overflow: hidden;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4fr 1fr;
  }
`;

const TextSection = styled.section``;

const CarouselImages = styled.section`
  background: grey;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
const CarouselController = styled.section`
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 1100px) {
    align-items: flex-start;
    justify-content: center;
  }
`;

const CarouselImage = styled.img``;

const TextWrapper = styled.div`
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  max-width: 525px;
  h2 {
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    margin-bottom: 42px;
  }
  p {
    max-width: 325px;
    margin-bottom: 20px;
  }
`;

const SliderButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  @media screen and (max-width: 1100px) {
    flex-direction: row;
  }
`;

const SliderButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 12px;
  img {
    margin: 0;
  }
`;

const MoreBtn = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 20px;
  }
`;
