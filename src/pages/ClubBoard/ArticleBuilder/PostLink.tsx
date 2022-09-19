import { TextField } from '@mui/material'
// import { getLinkPreview, getPreviewFromContent } from 'link-preview-js'
import { getLinkPreview } from 'link-preview-js'
import { useEffect } from 'react'

import { isValidUrl } from '../../../utils'

import type { TPostContent } from './ArticleBuilder'

export const PostLink = ({
  data,
  index,
  handleChange,
}: {
  data: TPostContent
  index: number
  handleChange: AnyFunction
}) => {
  useEffect(() => {
    if (isValidUrl(data.value)) {
      getPreviewByLink()
    }
  }, [data])
  const getPreviewByLink = async () => {
    console.log(data.value)
    const previewResult = await getLinkPreview(data.value as string, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Request-Method': 'GET',
        'Access-Control-Allow-Headers': 'Authorization',
        'Content-type': 'text/html; charset=UTF-8',
        // 'method': 'GET',
      },
      timeout: 10000,
      // mode: 'cors',
    })

    console.log('preview result ', previewResult)
  }
  return (
    <>
      <TextField
        value={data.value}
        name={data.type}
        onChange={(e) => handleChange(e, index)}
        variant="standard"
        sx={{ width: '100%' }}
      />
      <button onClick={getPreviewByLink}>go</button>
    </>
  )
}
