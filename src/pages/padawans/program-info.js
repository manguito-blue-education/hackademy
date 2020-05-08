import React from "react";
import styled from "styled-components";
import { Hero } from "../../components/base/Hero";
import { Content } from "../../components/base/Content";
import {
  text,
  btnText,
  content,
  wideGalleryContent,
} from "../../data/programInfoData";
import { WideGallery } from "../../components/base/WideGallery";

const ProgramInfo = () => {
  return (
    <ProgramInfoWrapper>
      <Hero text={text} btnText={btnText} />
      <Content content={content} />
      <WideGallery content={wideGalleryContent} />
    </ProgramInfoWrapper>
  );
};

const ProgramInfoWrapper = styled.section`
  background: var(--main-black);
`;

export default ProgramInfo;
