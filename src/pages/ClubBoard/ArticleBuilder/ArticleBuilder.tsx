import { Box, Stack, Typography, TextField, Button, Input } from '@mui/material'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

import { palette } from '../../../MuiTheme'
import type { IPost } from '../../../types/model'
import { apiPostRequest } from '../../../utils'
import * as Container from '../styled'

type NameType = 'title' | 'body'
const url = process.env.VITE_API_URL || `http://localhost:2567`
export const ArticleBuilder = () => {
  const [post, setPost] = useState<IPost>({} as IPost)
  const [image, setImage] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log(post)
  }, [post])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name: NameType = event.target.name as NameType
    setPost({ ...post, [name]: event.target.value })
  }
  const handleFileInput = () => {
    if (fileInputRef.current) fileInputRef.current?.click()
  }
  const handleFileChange = (event) => {
    const supportedFiles = ['image/png', 'image/jpeg']
    if (event.target.files && event.target.files.length) {
      const _file = event.target.files[0]

      if (supportedFiles.indexOf(_file.type) > -1) {
        let fr = new FileReader()
        fr.onload = function () {
          setImage(fr.result as string)
        }
        fr.readAsDataURL(_file)
        setFile(_file)
      } else {
        console.log('unsupported file')
      }
    } else {
      console.log('file not exist')
    }
  }
  const uploadPost = async () => {
    if (!post.title || !post.body || !image) {
      console.log('input data correctly')
      return
    }
    let res1 = await axios.post(
      `${url}/file/upload`,
      { image: file },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    console.log(res1)
    if (res1.status === 200 && res1.data.status && res1.data.file) {
      if (res1.data.file._id) {
        setPost({ ...post, media: res1.data.file._id })
        let res2 = await apiPostRequest(`${url}/posts`, {
          ...post,
          media: res1.data.file._id,
        })
        if (res2.status === 200) {
          console.log('success')
          setPost({ title: '', body: '', media: ''})
          setImage('')
        } else {
          console.log('it seems like not going well')
        }
      } else {
        setImage('')
        setFile(null)
      }
    } else {
      console.log('file is not uploaded')
    }
  }
  return (
    <Container.Main>
      <Box p="50px 240px">
        <Box>
          <TextField
            value={post.title}
            name={`title`}
            onChange={handleChange}
            variant="standard"
            sx={{ width: '100%' }}
          />
          <Typography variant="h5" sx={{ mt: '24px', textAlign: 'center' }}>
            This is enough! Post away bro!
          </Typography>
        </Box>
        <Box>
          <Input
            inputRef={fileInputRef}
            type="file"
            hidden
            onChange={handleFileChange}
            sx={{ visibility: 'hidden' }}
          />
          {image ? (
            <Box position="relative">
              <img src={image} alt="" width="100%" />
              <Box
                sx={{ left: '12px', position: 'absolute', top: '12px' }}
                onClick={() => setImage('')}
              >
                close
              </Box>
            </Box>
          ) : (
            <Button
              onClick={handleFileInput}
              variant="outlined"
              sx={{ fontSize: '36px', padding: '60px 0px', width: '100%' }}
            >
              + add image / gif
            </Button>
          )}

          <Typography variant="h5" sx={{ mt: '24px', textAlign: 'center' }}>
            This is enough! Post away bro!
          </Typography>
        </Box>
        <Box mt="36px">
          <TextField
            value={post.body}
            name={`body`}
            onChange={handleChange}
            multiline
            rows={5}
            sx={{ width: '100%' }}
          />
          <Stack
            direction="row"
            spacing={2}
            sx={{
              '& > button': {
                fontSize: '30px',
                paddingY: '20px',
                width: '100%',
              },
              padding: '24px 0px',
            }}
          >
            <Button variant="outlined">Section</Button>
            <Button variant="outlined">Text</Button>
            <Button variant="outlined">Image</Button>
            <Button variant="outlined">Link</Button>
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
    </Container.Main>
  )
}
