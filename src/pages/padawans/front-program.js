import React from "react";
import styled from "styled-components";
import { Hero } from "../../components/base/Hero";
import { Content } from "../../components/base/Content";
import {
  text,
  btnText,
  content,
  wideGalleryContent,
} from "../../data/frontProgramData";
import { SquareGallery } from "../../components/base/SquareGallery";
import Layout from "../../components/padawans/Layout";
import { PadawanRoadMap } from "../../components/padawans/PadawanRoadMap";
import { WideGallery } from "../../components/base/WideGallery";

function FrontProgram() {
  return (
    <Layout>
      <FrontProgramWrapper>
        <Hero image={"/front-header.png"} text={text} btnText={btnText} />
        <Content content={content} />
        <WideGallery content={wideGalleryContent} />
        <PadawanRoadMap />
      </FrontProgramWrapper>
    </Layout>
  );
}

const FrontProgramWrapper = styled.section`
  background: var(--main-black);
`;

export default FrontProgram;
