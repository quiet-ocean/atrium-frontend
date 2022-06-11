import styled from 'styled-components'

export const GridContainer = styled.main`
  display: grid;
  gap: 5px;
  grid-template-areas:
    'main main main main main main'
    'main main main main main main'
    'carousel carousel carousel livechat livechat livechat'
    'carousel carousel carousel livechat livechat livechat'
    'flex flex flex flex flex flex'
    'flex flex flex flex flex flex'
    'flex flex flex flex flex flex';

  height: 100%;
  padding-top: 64px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
