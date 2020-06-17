import React from "react";
import styled from "styled-components";

export const SquareGallery = ({ content }) => {
  const { text, images } = content;
  const makeGallery = images =>
    images.map((src, idx) =>
      <PlaceholderImage key={idx} src={src} />
    );
  return (
    <SquareGalleryWrapper>
      <Title>{text}</Title>
      <Grid>{makeGallery(images)}</Grid>
    </SquareGalleryWrapper>
  );
};

const SquareGalleryWrapper = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 60px;
`;

const Title = styled.p`
  font-size: 28px;
  margin: 60px 0 32px 0;
  line-height: 33px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

const PlaceholderImage = styled.img`
  width: 220px;
  height: 220px;
  background: #c4c4c4;
  border-radius: 10px;
  object-fit: scale-down;
`;
