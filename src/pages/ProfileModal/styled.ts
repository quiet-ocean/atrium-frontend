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
  margin-left: 80px;
  padding-top: 64px;
  width: calc(100% - 80px);
`
