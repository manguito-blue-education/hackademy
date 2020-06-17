import React from 'react';
import styled from "styled-components";

export const FooterForm = () => {
  return (
    <FooterWrap>
      <FormWrapper>
        <Text>
          Regístrate en nuestro newsletter
       </Text>
        <Form>
          <InputWrapper>
            <Input placeholder="Enter your email" type="email" name="email" id="email" />
          </InputWrapper>
          <Button>
            <img
              style={{ height: "25px", objectFit: "cover" }}
              src={"/right-arrow.svg"}
              alt="Registrar"
            />
          </Button>
        </Form>
      </FormWrapper>
      <ContactInfo>
        <ContactInfoWrapper>
          <ContactTitle>
            GET IN TOUCH
        </ContactTitle>
          <ContactText>
            hola@hackademy.mx
        </ContactText>
          <ContactText>
            +52 6675738836
        </ContactText>
          <ContactTitle>
            FOLLOW US
        </ContactTitle>
          <ContactText>
            Facebook/Twitter/IG
        </ContactText>
          <ContactText>
            @hackademymx
        </ContactText>
        </ContactInfoWrapper>
      </ContactInfo>
    </FooterWrap>
  )
}

const ContactInfo = styled.div`
margin: 10%;
display: flex;
align-items: center;
justify-content: center;
`
const Text = styled.div`
width: 50%;
letter-spacing: 0.04em;
font-size: 18px;
margin-bottom: 18px;
`

const ContactTitle = styled.p`
font-weight: bold;
font-size: 18px;
letter-spacing: 0.1em;
margin: 36px 0 18px 0;
color: #ffffff;
`

const ContactText = styled.p`
font-size: 16px;
line-height: 28px;
color: #ffffff;
`

const Input = styled.input`
width: 100%;
height: 100%;
font-size: 18px;
background: #202020;
color: #ffffff;
border: none;
padding: 0 12px;
`

const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: white;
max-width: 80px;
flex: 2;
`;
const InputWrapper = styled.div`
background: red;
flex: 8;
`;
const Form = styled.div`
width: 50%;
height: 60px;
background: aliceblue;
display: flex;
`

const FormWrapper = styled.div`
background: #100F10;
min-width: 460px;
flex: 6;
padding: 80px 0;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const ContactInfoWrapper = styled.div`
background: var(--main-black);
flex: 4;
`

const FooterWrap = styled.section`
display: flex;
flex-wrap: wrap;
min-height: 460px;
`
