import React from "react";
import styled from "styled-components";

export const PadawanRoadMap = () => {
  return (
    <PadawanRoadMapWrapper>
      <PadawanRoadMapTextWrapper>
        <Subtitle>
          El camino del padawan:
        </Subtitle>
        <Grid>
          <TextContainer>
            <Text>
              Tu camino inicia en el club de programación donde tendrás que
              resolver minimo 5 ejercicos y donde conoceras a tus futuros
              compañeros de generación
            </Text>
            <Pointer src={"/pointer.png"} />
          </TextContainer>
          <TextContainer>
            <Text>
              Una vez ternimano el club podrás agendar una entrevista con el
              equipo de Hackademy para conocernos mejor.Durante la entrevista
              podrás seleccionar a qué programa quieres aplicar
            </Text>
            <Pointer src={"/pointer.png"} />
          </TextContainer>
          <TextContainer>
            <Text>
              Si pasas con exito el club y la entrevista ¡Bienvenido! Se te
              enviará una carta compromiso a tu correo personal para despues
              asignarte tu correo @hackademy.mx
            </Text>
            <Pointer src={"/pointer.png"} />
          </TextContainer>
          <TextContainer>
            <Text>
              Empiezan 16 semanas super emocionantes donde deberas, junto con tu
              equipo, desarrollar la versión 1 del proyecto asignado... Todo
              esto con el apoyo de nuestros Masters
            </Text>
            <Pointer src={"/pointer.png"} />
          </TextContainer>
          <TextContainer>
            <Text>
              Al cierre de la generación tendrás una agenda de entrevistas con
              empresas que buscan contratar al mejor talento... Nosotros te
              acompañaremos en todo momento para que sea la mejor experiencia
            </Text>
            <Pointer src={"/pointer.png"} />
          </TextContainer>
        </Grid>
      </PadawanRoadMapTextWrapper>
      <PadawanRoadMapImage src="/padawan-roadmap.png" />
    </PadawanRoadMapWrapper>
  );
};

const PadawanRoadMapWrapper = styled.section`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const PadawanRoadMapTextWrapper = styled.div`
  padding: 0 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 205px);
  justify-content: space-between;
  @media screen and (max-width: 1205px) {
    grid-template-columns: repeat(5, 125px);
  }
`;

const TextContainer = styled.div`
  position: relative;
  :nth-child(1) {
    top: 20px;
  }
  :nth-child(2) {
    top: 5vmax;
    left: -3vmax;
  }
  :nth-child(3) {
    top: 3vmax;
  }
  :nth-child(4) {
    top: 10vmax;
    left: -4vmax;
  }
  :nth-child(5) {
    top: 25vmax;
  }
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 10px;
  @media screen and (max-width: 1205px) {
    font-size: 14px;
  }
`;

const Pointer = styled.img`
  display: block;
  margin: 0 auto;
`;

const PadawanRoadMapImage = styled.img`
  position: relative;
  z-index: 2;
  margin-top: -6vmin;
  width: 100%;
`;



const Subtitle = styled.h2`
  max-width: var(--max-width);
  color: #ffffff;
  margin: 25px auto;
  margin-top: 120px;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.04em;
`;
