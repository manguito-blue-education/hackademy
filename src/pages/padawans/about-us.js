import React from "react";
import styled from "styled-components";
import { Hero } from "../../components/base/Hero";
import { Content } from "../../components/base/Content";
import {
  text,
  btnText,
  content,
  squareGalleryContent,
} from "../../data/aboutUsData";
import { SquareGallery } from "../../components/base/SquareGallery";
import Layout from "../../components/padawans/Layout";
import { PadawanRoadMap } from "../../components/padawans/PadawanRoadMap";
import { FooterForm } from "../../components/base/FooterForm";

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsWrapper>
        <Hero image={"/about-us-header.png"} text={text} btnText={btnText} />
        <Content content={content} />
        <PadawanRoadMap />
        <SquareGallery content={{ text: "Nuestros partners", images: ["/github.png", "/aws.png", "/claribot.png", "/unesco.png", "/tomato.png", "/ashoka.png"] }} />
        <FooterForm></FooterForm>
      </AboutUsWrapper>
    </Layout>
  );
};

const AboutUsWrapper = styled.section`
  background: var(--main-black);
`;
export default AboutUs;
