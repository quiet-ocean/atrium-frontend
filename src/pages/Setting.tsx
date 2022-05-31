import * as React from 'react';
import {
  Container,
  Grid,
  Box,
  Button,
  Stack,
  LinearProgress,
  Paper,
  InputBase,
  IconButton,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';
// import PersonIcon from '@mui/icons-material/Person';
// import BuildIcon from '@mui/icons-material/Build';
// import SettingsIcon from '@mui/icons-material/Settings';
// import EventNoteIcon from '@mui/icons-material/EventNote';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
// import DiscordIcon from '@mui/icons-material/Discord'

// const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Footer = () => {
  return (
    <Container className="setting_footer">
      <Grid container>
        <Grid item lg={4}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={1}>
              <span>chat</span>
              <div className="notice">1</div>
            </Stack>
            <KeyboardArrowUpIcon />
          </Stack>
        </Grid>
        <Grid item lg={4} className="setting_footer_main">
          <Stack direction="row" spacing={5} justifyContent="center">
            <img src="/images/ooui_user-avatar.png" alt="" />
            <img src="/images/dashicons_admin-tools.png" alt="" />
            <img src="/images/ic_round-backpack.png" alt="" />
            <img src="/images/ci_settings-filled.png" alt="" />
            {/* <PersonIcon fontSize="large" className="setting_footer_main_icon"/>
            <BuildIcon fontSize="large" className="setting_footer_main_icon"/>
            <SettingsIcon fontSize="large" className="setting_footer_main_icon"/>
            <EventNoteIcon fontSize="large" className="setting_footer_main_icon"/> */}
          </Stack>
        </Grid>
        <Grid item lg={4}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2}>
              <span>xp</span>
              <Stack direction="row" spacing={1} className="loading-block">
                {new Array(5).fill(1).map((_, key: number) => {
                  return <div key={key} />;
                })}
              </Stack>
            </Stack>
            352/750
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

const Setting = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container className="setting">
      <Box className="setting_panel">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={2} className="setting_panel_side_nav">
              <Stack direction="column" sx={{ height: '100%' }} spacing={3}>
                <div className="active">SOCIAL</div>
                <div>TOOLS</div>
                <div>INVENTORY</div>
                <div>TEAMS</div>
                <div>TOOLS</div>
                <div style={{ height: '100%' }}></div>
                <div>SETTINGS</div>
              </Stack>
            </Grid>
            <Grid item lg={10} sx={{ p: '0px' }} className="setting_panel_body">
              <Grid item lg={12} className="setting_panel_body_header_nav">
                <Stack direction="row" justifyContent="space-between">
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Hub" {...a11yProps(0)} />
                    <Tab label="Profile" {...a11yProps(1)} />
                    <Tab label="Connections" {...a11yProps(2)} />
                    <Tab label="Jobs" {...a11yProps(2)} />
                    <Tab label="Edit Profile" {...a11yProps(2)} />
                  </Tabs>
                  <div>
                    <Paper
                      component="form"
                      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                      />
                      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </div>
                </Stack>
              </Grid>
              <div className="setting_panel_body_tab_content">
                <TabPanel value={value} index={0}>
                  <Grid container>
                    <Grid item lg={4}>
                      item-1-grid-4
                    </Grid>
                    <Grid item lg={8}>
                      item-1-grid-8
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid container className="setting_panel_body_tab_content_profile">
                    <Grid
                      item
                      lg={3}
                      className="text-center"
                      sx={{ textAlign: 'center', px: '24px' }}
                    >
                      <Stack direction="column" spacing={2}>
                        <img src="/images/PFP_SKETCHES_1 1.png" alt="" />
                        <h1>swiftyyy</h1>
                        {/* <LinearProgress variant="determinate" value={normalise(props.value)} /> */}
                        <Stack direction="row" justifyContent="center" spacing={1}>
                          <p>LVL 72</p>
                          <Box sx={{ width: '152px', pt: '10px' }}>
                            <LinearProgress variant="determinate" color="error" value={35} />
                          </Box>
                        </Stack>
                        <p>Graphic Designer</p>
                        <div>
                          <Button sx={{ background: '#ED2424' }}>Chat Now</Button>
                        </div>
                        <div>
                          <Button sx={{ background: '#181B21' }}>Email Me</Button>
                        </div>
                        <Stack direction="row" spacing={2} justifyContent="center">
                          <TwitterIcon sx={{ fontSize: '32px' }} />
                          <Icon sx={{ fontSize: '32px' }}>discord</Icon>
                          <InstagramIcon sx={{ fontSize: '32px' }} />
                          {/* <DiscordIcon /> */}
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item lg={9}>
                      <Stack direction="column" spacing={10}>
                        <div>
                          <h2>Description</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                            donec ipsum ac egestas at sit risus ut nunc. Velit eu nec faucibus
                            cursus lobortis magna eleifend ultrices non.
                          </p>
                          <Stack direction="row" spacing={2}>
                            <Button>
                              <StarIcon />
                              &nbsp;5 Years+
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; University
                            </Button>
                          </Stack>
                        </div>
                        <div>
                          <h2>Skills</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                            donec ipsum ac egestas at sit risus ut nunc. Velit eu nec faucibus
                            cursus lobortis magna eleifend ultrices non.
                          </p>
                          <Stack direction="row" spacing={2}>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe Illustrator
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe PhotoShop
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Figma
                            </Button>
                          </Stack>
                        </div>
                        <div>
                          <h2>Jobs</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                            donec ipsum ac egestas at sit risus ut nunc. Velit eu nec faucibus
                            cursus lobortis magna eleifend ultrices non.
                          </p>
                          <Stack direction="row" spacing={2}>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe Illustrator
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Adobe PhotoShop
                            </Button>
                            <Button>
                              <StarIcon />
                              &nbsp; Figma
                            </Button>
                          </Stack>
                        </div>
                      </Stack>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid container>
                    <Grid item lg={4}>
                      item-3-grid-4
                    </Grid>
                    <Grid item lg={8}>
                      item-3-grid-8
                    </Grid>
                  </Grid>
                </TabPanel>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Container>
  );
};

export { Setting };
