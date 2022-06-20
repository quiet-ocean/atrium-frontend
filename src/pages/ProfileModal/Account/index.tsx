import { Box } from '@mui/material'
import bg from '../images/Frame 138.png'
import profileImage from '../images/Rectangle 121.png'
import commentAvatar from '../images/Ellipse 37.png'
import cardImage from '../images/Rectangle 138.png'
import {
  Text, Heading, SubHead, HeadButton, Container, Card
} from './styled';

const Comment = ({ text }: { text: string }) => {
  return (
    <Box sx={{ display: 'flex', padding: '24px 0px', gap: '24px' }}>
      <Box sx={{ padding: '12px 0px' }}>
        <img src={commentAvatar} alt='' width='90px' />
      </Box>
      <Text sx={{ color: '#F8F9FA', padding: '36px', background: '#17181B' }}>
        {text}
      </Text>
    </Box>
  )
}
const Account = () => {
  return (
    <Box sx={{ gridArea: 'main' }}>
      <Box sx={{ gridArea: 'main' }}>
        <Box>
          <img src={bg} alt="" />
        </Box>
        <Box>
          <Box sx={{ p: '32px' }}>
            <Heading>spotify integrating with atrium</Heading>
            <Box sx={{ display: 'flex', gap: '12px', padding: '36px 0px' }}>
              <HeadButton>spotify</HeadButton>
              <HeadButton>atrium</HeadButton>
              <HeadButton>trending news</HeadButton>
              <HeadButton>integrations</HeadButton>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Container>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam in purus maecenas nisl tincidunt. Nascetur justo adipiscing lectus sapien sit accumsan. Platea ultrices est odio neque. Quam hendrerit amet, tellus lobortis lacus. Arcu amet, eu, dignissim gravida. A turpis ut id amet sollicitudin leo fusce integer.</Text>
        <SubHead>“spotify integrating with atrium”</SubHead>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu sed et tortor proin. Ac vulputate eget sagittis amet metus feugiat vitae. Velit nunc, augue felis interdum integer aliquet commodo vel ultrices. Feugiat malesuada tempor euismod et nibh ac laoreet urna, cursus. Feugiat nibh non amet, nunc risus faucibus viverra hendrerit. Cursus sed est tellus lorem nec vel. Lacinia ut rhoncus massa id turpis quisque amet, non.
        </Text>
        <img src={profileImage} alt='' />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu sed et tortor proin. Ac vulputate eget sagittis amet metus feugiat vitae. Velit nunc, augue felis interdum integer aliquet commodo vel ultrices. Feugiat malesuada tempor euismod et nibh ac laoreet urna, cursus. Feugiat nibh non amet, nunc risus faucibus viverra hendrerit. Cursus sed est tellus lorem nec vel. Lacinia ut rhoncus massa id turpis quisque amet, non.
        </Text>
      </Container>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <SubHead>comments</SubHead>
          <HeadButton>See All</HeadButton>
        </Box>
        <Box>
          <Comment text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac convallis commodo morbi ut leo gravida. A nunc laoreet cras semper netus quis blandit eu.`} />
          <Comment text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac convallis commodo morbi ut leo gravida. A nunc laoreet cras semper netus quis blandit eu.`} />
          <Comment text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac convallis commodo morbi ut leo gravida. A nunc laoreet cras semper netus quis blandit eu.`} />
        </Box>
        <Box></Box>
      </Container>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <SubHead>comments</SubHead>
          <HeadButton>See All</HeadButton>
        </Box>
        <Box sx={{ display: 'flex', gap: '36px', padding: '24px 0px' }}>
          <Card>
            <img src={cardImage} alt='' />
            <SubHead>spotify integrating with atrium</SubHead>
            <Text>//mar 1st, 2022</Text>
          </Card>
          <Card>
            <img src={cardImage} alt='' />
            <SubHead>spotify integrating with atrium</SubHead>
            <Text>//mar 1st, 2022</Text>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default Account
