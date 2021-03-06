import React from "react";
import styled from "styled-components";

const Bootcamp = () => {
  const benefits = [
    "Acceso a GitHub ",
    "Acceso a AWS educate",
    "Acceso a webinars",
    "Mejora en las habilidades",
    "Acceso a entrevistas de empleo",
    "Acceso a becas del 100%",
  ];

  return (
    <BootcampContainer>
      <BootcampWrapper>
        <Content>
          <Title>Bootcamp</Title>
          <Subtitle>
            El entrenamiento de Hackademy tiene como analogía el entrenamiento
            que los deportistas tienen para ir a las olimpiadas, trabajamos duro
            para ser los mejores
          </Subtitle>
          <TextWrapper>
            <Text>
              En Hackademy buscamos desarrollar el talento que tienes de la
              mejor manera y por eso hemos dividido nuestro programa en
              especialidades. Estas especialides cubren cada una de las partes
              que se requieren en el desarrollo de software: Backend, Frontend,
              desarrollo móvil, adminsitración de proyectos, desarrollo de
              chatbots y seguridad informtica.
            </Text>
            <Text>
              Cada uno de los programas cuenta con un grupo de mentores que
              comparten su experiencia para que puedas mejorar tus habilidades
              de una mejor forma, para nosotros el talento y las habilidades son
              como los musculos y por eso hay que entrenar.
            </Text>
          </TextWrapper>
          <div>
            <BenefitsTitle>Beneficios</BenefitsTitle>
            <BenefitsList>
              {benefits.map((benefit, idx) => (
                <Benefit key={idx}>- {benefit}</Benefit>
              ))}
            </BenefitsList>
          </div>
        </Content>
        <Grid>
          <ColumnOne>
            <ImagePlaceOne />
            <ImagePlaceOne />
            <ImagePlaceTwo />
          </ColumnOne>
          <ColumnTwo>
            <ImagePlaceTwo />
            <ImagePlaceOne />
            <ImagePlaceOne />
          </ColumnTwo>
        </Grid>
      </BootcampWrapper>
    </BootcampContainer>
  );
};

const BootcampContainer = styled.section`
  background: var(--main-black);
  color: #ffffff;
`;

const BootcampWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(460px, calc(80vw)), 1fr));
  justify-items: center;
  margin-top: 100px;
`;
const Column = styled.div`
  > * {
    margin-bottom: 80px;
  }
`;

const ColumnOne = styled(Column)``;
const ColumnTwo = styled(Column)``;

const ImagePlaceOne = styled.div`
  width: 464px;
  height: 468px;
  background: #c4c4c4;
`;
const ImagePlaceTwo = styled.div`
  width: 464px;
  height: 218px;
  background: #c4c4c4;
`;

const Content = styled.section``;

const BenefitsList = styled.ul`
  columns: 2;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  line-height: 70px;
`;
const Subtitle = styled.h2`
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.04em;
  margin: 25px 0;
`;

const Text = styled.p`
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #c7c7c7;
`;

const BenefitsTitle = styled.p`
  font-size: 18px;
  line-height: 204.19%;
  letter-spacing: 0.015em;
`;

const Benefit = styled.li`
  font-size: 16px;
  line-height: 204.19%;
  letter-spacing: -0.05em;
`;

const TextWrapper = styled.div`
  margin: 25px 0;
`;

export default Bootcamp;
