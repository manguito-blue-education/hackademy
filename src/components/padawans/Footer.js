import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Grid>
        <NewsletterWrapper></NewsletterWrapper>
        <ContactWrapper></ContactWrapper>
      </Grid>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const NewsletterWrapper = styled.div`
  background: #100f10;
`;
const ContactWrapper = styled.div``;
