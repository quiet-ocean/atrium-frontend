import { Box, Typography, Button, InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Heading = styled(Typography)(() => ({
  color: '#F5F7FA',
  fontFamily: 'Fractul',
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: '32px',
}))

export const SubTitle = styled(Typography)(() => ({
  fontFamily: 'Fractul',
  fontStyle: 'normal',
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '32px',
  color: '#F8F9FA',
  textTransform: 'capitalize',
}))
export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export const Text = styled(Typography)(() => ({
  fontFamily: 'Andale Mono Regular',
  fontStyle: 'normal',
  fontSize: '18px',
  fontWeight: '400',
  display: 'flex',
  lineHeight: '32px',
  alignItems: 'center',
  color: '#80868B',
  letterSpacing: '-0.05em',
  margin: '24px 0px',
}))

export const WalletButton = styled(Button)(() => ({
  alignItems: 'center',
	background: '#0149D1',
	gap: '21px',
	padding: '24px 62px',
	display: 'flex'
	
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
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
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
    '&:focus': {
      boxShadow: `${(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const Tag = styled(Button)(() => ({
  background: '#1A1A1A',
  padding: '10px 16px',
  fontFamily: 'Fractul',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '32px',
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  color: '#FFFFFF',
  // margin: '12px',
}))