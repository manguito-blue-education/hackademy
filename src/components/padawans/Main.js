import React from "react"
import styled from "styled-components"

export const Main = () => {
  return (
    <PadawansMain>
      <TextSection>
        <TextWrapper>
          <TextContainer>
            <h2>Desarrollamos Talento</h2>
            <div>
              <p>
                En Hackademy sabemos que hay mucho contenido en la red sobre
                programación desde cero más lo poco o mucho que vemos en la
                escuela.
              </p>

              <p>
                Es por esto que Hackademy no es un curso, nos enfocamos en el
                nivel más alto de la capacitación y trabajamos directamente en
                la practica y la implementación de los conocimientos que han
                adquirido previamente.
              </p>
            </div>
          </TextContainer>
        </TextWrapper>
      </TextSection>
      <CarouselImages></CarouselImages>
      <CarouselController></CarouselController>
    </PadawansMain>
  )
}

const PadawansMain = styled.main`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: minmax(450px, 1fr) minmax(450px, 660px) 170px;
  background: var(--main-black);
`

const TextSection = styled.section``
const CarouselImages = styled.section`
  background: grey;
`
const CarouselController = styled.section``

const TextWrapper = styled.div`
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const TextContainer = styled.div`
  max-width: 525px;
  text-align: justify;
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
`
