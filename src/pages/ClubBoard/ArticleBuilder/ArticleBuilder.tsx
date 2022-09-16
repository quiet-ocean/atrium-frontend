import { Box, Stack, Typography, TextField, Button } from '@mui/material'
// import axios from 'axios'
import React, { useState, useEffect } from 'react'

// import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
// import type { TAlert, TSnack } from '../../../stores/AppStore'
// import { openSnack } from '../../../stores/AppStore'
// import type { IPost } from '../../../types/model'
import { isValidUrl } from '../../../utils'
import * as Container from '../styled'

import { ValidationBox, PostImage, PostSection, PostLink, PostText } from './'

export type TPostContentType = 'section' | 'text' | 'image' | 'link'
export type TPostContent = {
  type: TPostContentType
  value: string | File
}
export interface IDevPost {
  title: string
  contents: TPostContent[]
}

// const url = process.env.VITE_API_URL || `http://localhost:2567`

export const ArticleBuilder = () => {
  // const dispatch = useAppDispatch()
  // const [post, setPost] = useState<Partial<IPost>>({} as IPost)
  // const [image, setImage] = useState<string>('')
  // const [file, setFile] = useState<File | null>(null)

  const [data, setData] = useState<IDevPost>({
    contents: [],
    title: '',
  } as IDevPost)

  useEffect(() => {
    console.log('data changed ', data)
  }, [data])
  // const handleSnack = (type: TAlert, content: string) => {
  //   const payload: TSnack = { content, open: true, type }
  //   dispatch(openSnack(payload))
  // }
  type ChangeEvent = React.ChangeEvent<HTMLInputElement>
  const handleChange = (event: ChangeEvent | File, index?: number) => {
    const isFile = (event as File).name !== undefined

    const name = isFile ? 'image' : (event as ChangeEvent).target.name
    const value = isFile ? event : (event as ChangeEvent).target.value
    console.log(name, value, index)
    if (name === 'title' && index === undefined)
      setData({ contents: data.contents, title: value as string })
    else if (index || index === 0) {
      setData({
        contents: [
          ...data.contents.slice(0, index),
          {
            type: name as TPostContentType,
            value: isFile ? (value as File) : (value as string),
          },
          ...data.contents.slice(index + 1),
        ],
        title: data.title,
      })
    }
  }

  const uploadPost = async () => {
    // if (!post.title || !post.body || !image) {
    //   // console.log('input data correctly')
    //   handleSnack('warning', 'Type data exactly')
    //   return
    // }
    // let res1 = await axios.post(
    //   `${url}/file/upload`,
    //   { image: file },
    //   {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }
    // )
    // if (res1.status === 200 && res1.data.status && res1.data.file) {
    //   if (res1.data.file._id) {
    //     setPost({ ...post, media: res1.data.file._id })
    //     let res2 = await apiPostRequest(`${url}/posts`, {
    //       ...post,
    //       media: res1.data.file._id,
    //     })
    //     if (res2.status === 200) {
    //       console.log('success')
    //       setPost({ body: '', media: '', title: '' })
    //       setImage('')
    //       handleSnack('success', 'Succeed to create post')
    //     } else {
    //       // console.log('it seems like not going well')
    //       handleSnack('error', 'Error occured')
    //     }
    //   } else {
    //     setImage('')
    //     setFile(null)
    //   }
    // } else {
    //   // console.log('file is not uploaded')
    //   handleSnack('error', 'File is not uploaded')
    // }
  }
  const validate = (content: TPostContent) => {
    // return true
    if (content.type === 'text' || content.type === 'section') {
      return (
        content.value !== undefined && (content.value as string).length !== 0
      )
    } else if (content.type === 'link') {
      return isValidUrl(content.value)
    } else if (content.type === 'image') {
      return false
    }
  }
  const getComponent = (item: TPostContent, index: number) => {
    const props = { data: item, handleChange, index }

    switch (item.type) {
      case 'image': {
        return <PostImage {...props} />
      }
      case 'link': {
        return <PostLink {...props} />
      }
      case 'text': {
        return <PostText {...props} />
      }
      case 'section': {
        return <PostSection {...props} />
      }
    }
  }
  const addItem = (type: TPostContentType) => {
    setData({ ...data, contents: [...data.contents, { type, value: '' }] })
  }
  return (
    <Container.Main>
      <Box py={6} px={30}>
        <ValidationBox valid={Boolean(data.title) && data.title.length !== 0}>
          <TextField
            value={data.title}
            name={`title`}
            onChange={(e: ChangeEvent) => handleChange(e)}
            variant="standard"
            sx={{ width: '100%' }}
          />
        </ValidationBox>
        {data.contents?.map((item: TPostContent, key: number) => (
          <ValidationBox valid={validate(item)} key={key}>
            {getComponent(item, key)}
          </ValidationBox>
        ))}
        <Box>
          <Box mt="36px">
            <Stack
              direction="row"
              spacing={2}
              sx={{
                '& > button': {
                  fontSize: 30,
                  py: 2,
                  width: '100%',
                },
                py: 3,
              }}
            >
              <Button variant="outlined" onClick={() => addItem('section')}>
                Section
              </Button>
              <Button variant="outlined" onClick={() => addItem('text')}>
                Text
              </Button>
              <Button variant="outlined" onClick={() => addItem('image')}>
                Image
              </Button>
              <Button variant="outlined" onClick={() => addItem('link')}>
                Link
              </Button>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ mt: '24px', textAlign: 'center' }}>
              Once you post, you can’t edit
            </Typography>
            <Box mt="12px" textAlign="center">
              <Button
                onClick={uploadPost}
                variant="outlined"
                sx={{
                  background: '#E90026',
                  border: 'none',
                  color: palette.text.primary,
                  fontSize: '36px',
                  padding: '30px 150px',
                }}
              >
                upload
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container.Main>
  )
}
