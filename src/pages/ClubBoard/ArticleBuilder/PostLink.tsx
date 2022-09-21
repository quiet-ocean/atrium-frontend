import { TextField } from '@mui/material'
// import { getLinkPreview, getPreviewFromContent } from 'link-preview-js'
import { getLinkPreview } from 'link-preview-js'
import { useEffect } from 'react'

import { isValidUrl } from '../../../utils'
import axios from 'axios'

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
    // const previewResult = await getLinkPreview(data.value as string, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     // 'Access-Control-Request-Method': 'GET',
    //     'Access-Control-Allow-Headers': 'Authorization',
    //     'Content-type': 'text/html; charset=UTF-8',
    //     // 'method': 'GET',
    //   },
    //   timeout: 10000,
    //   // mode: 'cors',
    // })
    try {
      // const res = await axios.get(data.value as string, {
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //   } 
      // })
      // const response = await axios({
      //   url: data.value as string,
      //   method: 'GET',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      //     'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT',
      //     'Content-type': 'text/html; charset=UTF-8',
      //     "Access-Control-Allow-Headers": "X-Token",
      //     "Access-Control-Allow-Credentials": "true",
      //   }
      // })

      const xhttp = new XMLHttpRequest()

      xhttp.onload = function() {
        console.log(this.responseText)
      }
      xhttp.onerror = function (e) {
        console.log('Error occurred while load preview link: ', e)
      }
      xhttp.open('GET', 'https://medium.com/coinmonks/after-the-ethereum-merge-a-post-op-2e158387eb74')
      xhttp.send()
      // console.log(response)
    } catch (e) {
      console.log('error: ', e)
    }
    // console.log('preview result ', previewResult)
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
