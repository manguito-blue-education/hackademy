import React from "react"
import styled from "styled-components"

export const Content = ({ content }) => {
  const makeTexts = texts =>
    texts.map((text, idx) => <Text key={idx}>{text}</Text>)

  const makeLists = lists => {
    if (!lists) return null
    return lists.map(({ title, items }, idx) => (
      <div key={idx}>
        <ListTitle>{title}</ListTitle>
        <List>
          {items.map((item, idx) => (
            <li style={{ marginTop: 15 }} key={idx}>
              - {item}
            </li>
          ))}
        </List>
      </div>
    ))
  }

  return content.map(({ title, subtitle, texts, lists }, idx) => (
    <Grid key={idx}>
      <Title>{title}</Title>
      <div>
        <Subtitle>{subtitle}</Subtitle>
        {makeTexts(texts)}
        <ListContainer>{makeLists(lists)}</ListContainer>
      </div>
    </Grid>
  ))
}

const Grid = styled.section`
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 24px;
  margin: 0 auto 24px;
  color: #fff;
`
const Title = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #909090;
`
const Subtitle = styled.p`
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.04em;
  margin-bottom: 24px;
`
const Text = styled.p`
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #c7c7c7;
  max-width: 720px;
`

const ListTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 204.19%;
  letter-spacing: 0.015em;
`
const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
`
const List = styled.ul`
  max-width: 200px;
`
