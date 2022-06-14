import styled from 'styled-components'

import { palette } from '../../MuiTheme'

export const Root = styled.section`
  background-color: ${palette.background.default};
  height: 1786px;
  width: 100%;
`

export const Page = styled.main`
  display: grid;
  gap: 8px;
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
  max-width: 1500px;
  margin: 0 auto;
`
