import React from "react"
import styled from "styled-components"
import { Hero } from "../../components/base/Hero"
import { Content } from "../../components/base/Content"
import {
  text,
  btnText,
  content,
  wideGalleryContent,
} from "../../data/aboutUsData"
import { WideGallery } from "../../components/base/WideGallery"

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Hero text={text} btnText={btnText} />
      <Content content={content} />
      <WideGallery content={wideGalleryContent} />
    </AboutUsWrapper>
  )
}

const AboutUsWrapper = styled.section`
  background: var(--main-black);
`
export default AboutUs
