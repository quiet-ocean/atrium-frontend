import { Box, Typography, Button, InputBase, Tab } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CTab = styled(Tab)(() => ({
  justifyContent: 'flex-start',
  // padding: '12px 12px 12px 0px',
  textTransform: 'capitalize',
  alignItems: 'flex-start',
  fontSize: '24px',
  fontWeight: '400',
}))

export const Heading = styled(Typography)(() => ({
  color: '#F5F7FA',
  fontFamily: 'Fractul',
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: '32px',
}))

export const SubTitle = styled(Typography)(() => ({
  color: '#F8F9FA',
  fontFamily: 'Fractul',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '32px',
  textTransform: 'capitalize',
}))
export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export const Text = styled(Typography)(() => ({
  alignItems: 'center',
  color: '#80868B',
  display: 'flex',
  fontFamily: 'Andale Mono Regular',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: '-0.05em',
  lineHeight: '32px',
  margin: '24px 0px',
}))

export const WalletButton = styled(Button)(() => ({
  alignItems: 'center',
  background: '#0149D1',
  display: 'flex',
  gap: '21px',
  padding: '24px 62px',
}))
export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: '24px 0px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export function a11yProps(index: number) {
  return {
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  }
}

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    '&:focus': {
      borderColor: theme.palette.primary.main,
      boxShadow: `${(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #2E3134',

    borderRadius: 0,

    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    fontSize: 16,

    padding: '10px 12px',

    position: 'relative',

    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    width: 'auto',
  },
  'label + &': {
    marginTop: theme.spacing(3),
  },
}))

export const Tag = styled(Button)(() => ({
  alignItems: 'center',
  background: '#1A1A1A',
  color: '#FFFFFF',
  display: 'flex',
  fontFamily: 'Fractul',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '32px',
  padding: '10px 16px',
  textTransform: 'capitalize',
  // margin: '12px',
}))
