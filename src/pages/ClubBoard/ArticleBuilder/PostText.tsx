import { TextField } from '@mui/material'

import type { TPostContent } from './ArticleBuilder'

export const PostText = ({
  data,
  index,
  handleChange,
}: {
  data: TPostContent
  index: number
  handleChange: AnyFunction
}) => (
  <TextField
    value={data.value}
    name={data.type}
    onChange={(e) => handleChange(e, index)}
    multiline
    rows={5}
    sx={{ width: '100%' }}
  />
)
