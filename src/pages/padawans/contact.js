import React from "react"
import styled from "styled-components"

function Contact() {
  return (
    <div>
      <Grid>
        {/* <img src="" alt="" /> */}
        <ImagePlaceholder />
        <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing</MainText>
        <ContactButtonWrapper>
          <p>Contact Us</p>
          <button>v</button>
        </ContactButtonWrapper>
      </Grid>
      <FormContainer>
        <FormWrapper>
          <FormTitle>Just a form. It’s easy.</FormTitle>
          <Form>
            <NameEmailWrapper>
              <Input placeholder="Full Name" type="text" />
              <Input placeholder="Email Address" type="text" />
            </NameEmailWrapper>
            <Input placeholder="Comment" type="text" />
            <SendButton>SEND MESSAGE</SendButton>
          </Form>
        </FormWrapper>
      </FormContainer>
    </div>
  )
}

const Grid = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "main";
  height: 100vh;
`

const MainText = styled.h1`
  grid-area: main;
  align-self: center;
  justify-self: center;
  max-width: 870px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 79px;
  letter-spacing: 0.035em;
  color: #ffffff;
`

const ImagePlaceholder = styled.div`
  grid-area: main;
  height: 100%;
  width: 100%;
  background: #c4c4c4;
`

const ContactButtonWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 5%;
  display: flex;
  align-items: center;
  button {
    width: 65px;
    height: 65px;
    margin-left: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: none;
  }
`

const FormContainer = styled.section`
  height: 80vh;
  width: 100%;
  background: var(--main-black);
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.div`
  min-width: min(955px, calc(100vw - (2 * 15vmin)));
`

const FormTitle = styled.h2`
  margin: 0 auto;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.07em;
  color: #ffffff;
`

const Form = styled.form``

const Input = styled.input`
  box-sizing: border-box;
  padding: 0 0 5px 5px;
  width: 100%;
  ::placeholder {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.025em;
    color: #757575;
  }
  color: white;
  background: none;
  border: none;
  border-bottom: 1px solid #757575;
`

const NameEmailWrapper = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
  > input:nth-child(2) {
    margin-left: 20px;
  }
  margin: 60px 0 40px;
`

const SendButton = styled.button`
  border: none;
  width: 175px;
  height: 45px;
  background: #ffffff;
  border-radius: 22px;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.055em;
  text-transform: uppercase;
  color: #000000;
  margin-top: 40px;
  cursor: pointer;
`

export default Contact
