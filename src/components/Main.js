import React from "react"
import styled from "styled-components"

export const Main = () => {
  return (
    <MainSection>
      <PadawansSection>
        <div>Ut sit nunc arcu neque leo.</div>
      </PadawansSection>
      <EnterpriseSection>
        <div>Ut sit nunc arcu neque leo.</div>
      </EnterpriseSection>
    </MainSection>
  )
}

const MainSection = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const PadawansSection = styled.section`
  font-size: 50px;
  line-height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    cursor: pointer;
    max-width: 370px;
  }
  color: var(--main-black);
`
const EnterpriseSection = styled(PadawansSection)`
  background: var(--main-black);
  color: white;
`
