import React from "react";
import styled from "styled-components";
import { Hero } from "../../components/base/Hero";
import { Content } from "../../components/base/Content";
import {
  text,
  btnText,
  content,
  wideGalleryContent,
} from "../../data/chatbotProgramData";
import { SquareGallery } from "../../components/base/SquareGallery";
import Layout from "../../components/padawans/Layout";
import { PadawanRoadMap } from "../../components/padawans/PadawanRoadMap";
import { WideGallery } from "../../components/base/WideGallery";
import { FooterForm } from "../../components/base/FooterForm";

function ChatbotProgram() {
  return (
    <Layout>
      <ChatbotProgramWrapper>
        <Hero image={"/chatbot-header.png"} text={text} btnText={btnText} />
        <Content content={content} />
        <WideGallery content={wideGalleryContent} />
        <PadawanRoadMap />
        <SquareGallery content={{ text: "Nuestros partners", images: ["/github.png", "/aws.png", "/claribot.png", "/unesco.png", "/tomato.png", "/ashoka.png"] }} />
        <FooterForm></FooterForm>
      </ChatbotProgramWrapper>
    </Layout>
  );
}

const ChatbotProgramWrapper = styled.section`
  background: var(--main-black);
`;

export default ChatbotProgram;
