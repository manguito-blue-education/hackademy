import React from "react";
import styled from "styled-components";
const programs = [
  {
    title: "Club de programación",
    languages: "JavaScript / Python",
    spots: "50",
  },
  { title: "Backend", languages: "JavaScript / Python", spots: "25" },
  { title: "Frontend", languages: "JavaScript", spots: "25" },
  { title: "Móvil", languages: "JavaScript", spots: "25" },
  { title: "Chatbots", languages: "JavaScript / Python", spots: "25" },
  { title: "Administración de proyecto", languages: "", spots: "25" },
  {
    title: "Seguridad informática",
    languages: "JavaScript / Python",
    spots: "30",
  },
];

export const Programs = () => {
  const makeRows = programs =>
    programs.map(({ title, languages, spots }, idx) => (
      <Row key={idx}>
        <Title>{title}</Title>
        <Languages>{languages}</Languages>
        <Spots>{spots}</Spots>
      </Row>
    ));
  return (
    <ProgramsWrapper>
      <Row>
        <ProgramHeader>Programa</ProgramHeader>
        <ProgramHeader>Lenguajes</ProgramHeader>
        <ProgramHeader>Espacios</ProgramHeader>
      </Row>
      {makeRows(programs)}
    </ProgramsWrapper>
  );
};

const ProgramsWrapper = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  color: #fff;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #4d4d4d;
`;

const ProgramHeader = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.255em;
  color: #909090;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;
const Languages = styled.p`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.18em;
`;

const Spots = styled.p`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;
