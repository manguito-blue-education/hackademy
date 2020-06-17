import React from "react";
import styled from "styled-components";
import { Hero } from "../../components/base/Hero";
import { Content } from "../../components/base/Content";
import {
  text,
  btnText,
  content,
  wideGalleryContent,
} from "../../data/mobileProgramData";
import { SquareGallery } from "../../components/base/SquareGallery";
import Layout from "../../components/padawans/Layout";
import { PadawanRoadMap } from "../../components/padawans/PadawanRoadMap";
import { WideGallery } from "../../components/base/WideGallery";
import { FooterForm } from "../../components/base/FooterForm";

function MobileProgram() {
  return (
    <Layout>
      <MobileProgramWrapper>
        <Hero image={"/mobile-header.png"} text={text} btnText={btnText} />
        <Content content={content} />
        <WideGallery content={wideGalleryContent} />
        <PadawanRoadMap />
        <SquareGallery content={{ text: "Nuestros partners", images: ["/github.png", "/aws.png", "/claribot.png", "/unesco.png", "/tomato.png", "/ashoka.png"] }} />
        <FooterForm></FooterForm>
      </MobileProgramWrapper>
    </Layout>
  );
}

const MobileProgramWrapper = styled.section`
  background: var(--main-black);
`;

export default MobileProgram;
