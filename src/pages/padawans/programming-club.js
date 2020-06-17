import React from "react";
import styled from "styled-components";
import { Hero } from "../../components/base/Hero";
import { Content } from "../../components/base/Content";
import {
  text,
  btnText,
  content,
  wideGalleryContent,
} from "../../data/programmingClubData";
import { SquareGallery } from "../../components/base/SquareGallery";
import Layout from "../../components/padawans/Layout";
import { PadawanRoadMap } from "../../components/padawans/PadawanRoadMap";
import { FooterForm } from "../../components/base/FooterForm";

function ProgrammingClub() {
  return (
    <Layout>
      <ProgrammingClubWrapper>
        <Hero image={"/padawans.png"} text={text} btnText={btnText} />
        <Content content={content} />
        <PadawanRoadMap />
        <SquareGallery content={{ text: "Nuestros partners", images: ["/github.png", "/aws.png", "/claribot.png", "/unesco.png", "/tomato.png", "/ashoka.png"] }} />
        <FooterForm />
      </ProgrammingClubWrapper>
    </Layout>
  );
}

const ProgrammingClubWrapper = styled.section`
  background: var(--main-black);
`;

export default ProgrammingClub;
