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

function ProgrammingClub() {
  return (
    <Layout>
      <ProgrammingClubWrapper>
        <Hero image={"/padawans.png"} text={text} btnText={btnText} />
        <Content content={content} />
        <PadawanRoadMap />
      </ProgrammingClubWrapper>
    </Layout>
  );
}

const ProgrammingClubWrapper = styled.section`
  background: var(--main-black);
`;

export default ProgrammingClub;
