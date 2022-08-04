import { Box, Stack, Typography } from '@mui/material'

import { SubTitle, Tag } from '../EditProfile/styled'
import * as Container from '../styled'

import { ArticleBox, CButton, UploadButton } from './styled'

export const ArticleBuilder = () => {
  return (
    <Container.Page>
      <Box sx={{ gridArea: 'main', padding: '128px 0px' }}>
        <SubTitle style={{ padding: '24px 0px' }}>Add A Title</SubTitle>
        <Stack direction="row" spacing={2} style={{ padding: '24px 0px' }}>
          <Tag sx={{ padding: '6px' }}>Add Tag</Tag>
          <Tag sx={{ padding: '6px' }}>Add Tag</Tag>
        </Stack>
        <ArticleBox style={{ padding: '24px 0px' }}>
          <Typography
            sx={{
              color: '#80868B',
              fontFamily: 'Fractul',
              fontSize: '36px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Start Creating your Content
          </Typography>
        </ArticleBox>
        <Stack direction="row" spacing={2} style={{ padding: '24px 0px' }}>
          <CButton>Section</CButton>
          <CButton>Text</CButton>
          <CButton>Image</CButton>
          <CButton>Link</CButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          style={{ padding: '24px 0px' }}
        >
          <UploadButton>upload</UploadButton>
        </Stack>
      </Box>
    </Container.Page>
  )
}
