import React from "react";
import styled from "styled-components";
import { PadawanRoadMap } from "../../components/padawans/PadawanRoadMap";
import Layout from "../../components/padawans/Layout";
import { FooterForm } from "../../components/base/FooterForm"

const Bootcamp = () => {
  const benefits = [
    "Acceso a GitHub ",
    "Acceso a AWS educate",
    "Acceso a webinars",
    "Mejora en las habilidades",
    "Acceso a entrevistas de empleo",
    "Acceso a becas del 100%",
  ];
  const requirements = [
    "Resolver por lo menos 5 ejercicios del  Club de programación",
    "Agendar entrevista con el equipo de Hackademy",
    "Firmar carta compromiso",
    "Disponibilidad de 4 horas diarias",
    "Actitud y ganas de aprender",
  ];

  return (
    <Layout>
      <BootcampContainer>
        <BootcampWrapper>
          <Content>
            <Title>Bootcamp</Title>
            <Subtitle>
              El entrenamiento de Hackademy tiene como analogía el entrenamiento
              que los deportistas tienen para ir a las olimpiadas, trabajamos
              duro para ser los mejores
            </Subtitle>
            <TextWrapper>
              <Text>
                En Hackademy buscamos desarrollar el talento que tienes de la
                mejor manera y por eso hemos dividido nuestro programa en
                especialidades. Estas especialides cubren cada una de las partes
                que se requieren en el desarrollo de software: Backend,
                Frontend, desarrollo móvil, adminsitración de proyectos,
                desarrollo de chatbots y seguridad informtica.
              </Text>
              <Text>
                Cada uno de los programas cuenta con un grupo de mentores que
                comparten su experiencia para que puedas mejorar tus habilidades
                de una mejor forma, para nosotros el talento y las habilidades
                son como los musculos y por eso hay que entrenar.
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
            <div style={{ marginTop: 20 }}>
              <BenefitsTitle>Requisitos</BenefitsTitle>
              <BenefitsList>
                {requirements.map((requirement, idx) => (
                  <Benefit key={idx}>- {requirement}</Benefit>
                ))}
              </BenefitsList>
            </div>
          </Content>
        </BootcampWrapper>
        <img
          style={{ width: "100%", objectFit: "cover", margin: "60px 0" }}
          src={"/padawans.png"}
          alt="Imagen de nuestros padawans"
        />
        <BootcampWrapper>
          <Content>
            <Subtitle>
              Hackademy es un bootcamp intensivo donde nuestros padawans (llamamos así a nuestros aprendices)
              pueden mejorar sus habilidades técnicas a través de la práctica, desarrollando un proyecto de la vida real,
              apoyados por mentores expertos que están trabajando en la industria del desarrollo de software.
            </Subtitle>
            <TextWrapper>
              <Text>
                Nuestros padawans tienen 16 semanas para desarrollar la versión 1 de un proyecto real con el que, durante las entrevistas, pueden demostrar lo que han aprendido, mejorado y lo que los diferencia del resto.
                El programa beneficia al padawan, mejorando sus habilidades, así como a las empresas que están en búsqueda de talento al obtener acceso a los elementos mejor preparados.
                Cada padawan inicia aprendiendo sobre GIT y SCRUM durante las 2 primeras semanas del bootcamp para tener las bases necesarias para iniciar el camino y especializarse en un área del desarrollo.
                <ProgramsList>
                  <li>Development</li>
                  <li>Frontend (ReactJS/Angular)</li>
                  <li>Backend (NodeJS/Python)</li>
                  <li>Android (React Native)</li>
                  <li>Desarrollo de chatbots</li>
                  <li>Administración de proyectos</li>
                  <li>Agile (Scrum)</li>
                  <li>Management 3.0 - DevOps</li>
                </ProgramsList>
              </Text>
            </TextWrapper>
          </Content>
        </BootcampWrapper>
        <PadawanRoadMap />
        <FooterForm />
      </BootcampContainer>
    </Layout>
  );
};

const ProgramsList = styled.section`
  list-style-type: circle;
  margin-left: 20px;
`

const BootcampContainer = styled.section`
  background: var(--main-black);
  color: #ffffff;
  padding-top: 125px;
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
  font-size: 24px;
  line-height: 204.19%;
  font-weight: bold;
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
