import { TextField as MuiTextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AtriumTextField = styled(MuiTextField)(({ theme }) => ({
  '& input': {
    fontSize: '24px',
    padding: '24px',
  },
  '&.dark': {
    background: `#202124`,
    border: `2px solid #2E3134`,
    color: 'white',
  },
  '&.default': {
    // background: theme.palette.text.disabled,
    background: 'rgba(242, 242, 242, 0.1)',
  },
  '&.rounded': {
    '& input, .MuiOutlinedInput-root': {
      borderRadius: '12px',
    },
    borderRadius: '12px',
  },
  border: `2px solid ${theme.palette.text.disabled}`,
  borderRadius: 0,
  width: '100%',
}))

export const TextField = ({
  children,
  // variant,
  // color,
  _class,
}: {
  children: React.ReactNode
  // variant?: 'primary' | 'secondary'
  // color?: string
  _class?: string
}) => {
  return <AtriumTextField className={_class}>{children}</AtriumTextField>
}
