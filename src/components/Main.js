import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Main = () => {
  return (
    <MainSection>
      <PadawansSection>
        <div>
          <Link to="/padawans">
            Entrenamiento
          </Link>
        </div>
      </PadawansSection>
      <EnterpriseSection>
        <div>Empresas</div>
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
