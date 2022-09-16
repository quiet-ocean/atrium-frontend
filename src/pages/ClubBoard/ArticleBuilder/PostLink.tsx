import { TextField } from '@mui/material'
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
      getDataByLink()
    }
  }, [data])
  const getDataByLink = async () => {
    const res = await fetch(new URL(data.value as string), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html',
      },
      method: 'GET',
    })
    console.log(res)
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
