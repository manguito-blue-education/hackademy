import React from "react"
import styled from "styled-components"

export const Hero = ({ text, btnText }) => {
  return (
    <HeroWrapper>
      <ImagePlaceholder />
      <MainText>{text}</MainText>
      <ContactButtonWrapper>
        <p>{btnText}</p>
        <button>v</button>
      </ContactButtonWrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "main";
  height: 100vh;
  color: #ffffff;
`

const ImagePlaceholder = styled.div`
  grid-area: main;
  height: 100%;
  width: 100%;
  background: #c4c4c4;
`

const MainText = styled.p`
  grid-area: main;
  align-self: end;
  max-width: 550px;
  position: relative;
  bottom: 30px;
  justify-self: center;
`

const ContactButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 20px;
  display: flex;
  align-items: center;
  button {
    width: 65px;
    height: 65px;
    margin-left: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: none;
  }
`
