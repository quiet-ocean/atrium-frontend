import { TextField } from '@mui/material'
import { useEffect } from 'react'
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

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
    getLinkPreview(data.value as string, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'method': 'GET',
      },
      timeout: 100000,
      // mode: 'cors',
    }).then((res) =>
      console.debug(res)
    );
  }
  return (
    <TextField
      value={data.value}
      name={data.type}
      onChange={(e) => handleChange(e, index)}
      variant="standard"
      sx={{ width: '100%' }}
    />
  )
}
