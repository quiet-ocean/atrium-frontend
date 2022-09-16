import { Box, Input, Button } from '@mui/material'
import React, { useState, useRef } from 'react'

import { useAppDispatch } from '../../../hooks'
import { openSnack } from '../../../stores/AppStore'

import type { TPostContent } from './ArticleBuilder'

export const PostImage = ({
  data,
  index,
  handleChange,
}: {
  data: TPostContent
  index: number
  handleChange: AnyFunction
}) => {
  const dispatch = useAppDispatch()
  const [image, setImage] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  // const [file, setFile] = useState<File | null>(null)
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
        // setFile(_file)
        handleChange(
          {
            target: { name: 'image', value: _file },
          } as React.ChangeEvent<HTMLInputElement>,
          index
        )
      } else {
        // console.log('unsupported file')
        dispatch(
          openSnack({
            content: 'Unsupported file',
            open: true,
            type: 'warning',
          })
        )
      }
    } else {
      // console.log('file not exist')
      dispatch(
        openSnack({ content: 'File not exist', open: true, type: 'warning' })
      )
    }
  }
  return (
    <Box>
      <Input
        inputRef={fileInputRef}
        type="file"
        hidden
        onChange={handleFileChange}
        sx={{ visibility: 'hidden' }}
      />
      {data.value && image ? (
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
    </Box>
  )
}
