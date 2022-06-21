import { styled, Box, Button } from '@mui/material'

export const ArticleBox = styled(Box)(({ theme }) => ({
  border: '1px solid' + theme.palette.border.gray,
  height: '320px',
  margin: '36px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}))

export const CButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  border: '1px solid ' + theme.palette.border.gray,
  color: theme.palette.text.gray,
  width: '100%'
}))

export const UploadButton = styled(Button)(() => ({
  alignItems: 'center',
  background: '#E90026',
  color: '#FFFFFF',
  display: 'flex',
  fontFamily: 'Fractul',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: 800,
  gap: '10px',
  lineHeight: '19px',
  padding: '30px 10px',
  textAlign: 'center',
  textTransform: 'capitalize',
}))
