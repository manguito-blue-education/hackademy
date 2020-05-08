import React from "react";
import styled from "styled-components";

export const WideGallery = ({ content }) => {
  const { text, images } = content;
  const makeGallery = images =>
    images.map(({ src, title, subtitle }, idx) => (
      <div key={idx}>
        {/* <img src={src} alt={`Image of ${title}`} /> */}
        <ImagePlaceHolder />
        <div>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    ));
  return (
    <WideGalleryWrapper>
      <Title>{text}</Title>
      <Grid>{makeGallery(images)}</Grid>
    </WideGalleryWrapper>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const ImagePlaceHolder = styled.div`
  width: 100%;
  height: 496.81px;
  background: #c4c4c4;
`;

const WideGalleryWrapper = styled.section`
  color: #fff;
`;

const Title = styled.p`
  font-size: 27px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.04em;
  max-width: min(1090px, calc(100vw - 24vmin));
  margin: 0 auto 10px;
`;
