import React from "react";
import styled from "styled-components";
import { Hero } from "../../components/base/Hero";
import { Content } from "../../components/base/Content";
import {
  text,
  btnText,
  content,
  wideGalleryContent,
  squareGalleryContent,
} from "../../data/backendProgramData";
import { WideGallery } from "../../components/base/WideGallery";
import { SquareGallery } from "../../components/base/SquareGallery";
import { PadawanRoadMap } from "../../components/padawans/PadawanRoadMap";
import Layout from "../../components/padawans/Layout";

const BackendProgram = () => {
  return (
    <Layout>
      <BackendProgramWrapper>
        <Hero image={"/backend-header.png"} text={text} btnText={btnText} />
        <Content content={content} />
        <WideGallery content={wideGalleryContent} />
        <PadawanRoadMap />
      </BackendProgramWrapper>
    </Layout>
  );
};

const BackendProgramWrapper = styled.section`
  background: var(--main-black);
`;

export default BackendProgram;
