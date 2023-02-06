import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AdminHome from '../components/AdminHome/AdminHome';
import AdminService from '../components/AdminService/AdminService';
import AdminContact from '../components/AdminContact/AdminContact';
import AdminSocialIcon from '../components/AdminSocialIcon/AdminSocialIcon';
import ContactRequest from '../components/ContactRequest/ContactRequest';
import AddAdmin from '../components/AddAdmin/AddAdmin';
import { useMediaQuery } from '@mui/material';

function TabPanel(props) {
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
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const media = useMediaQuery("(max-width:768px)");
  

  return (
    <Box sx={{ width: '100%',marginTop:media?"51px":"65px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',display:"flex",justifyContent:"center" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Edit Home Page" {...a11yProps(0)} />
          <Tab label="Edit Service Page" {...a11yProps(1)} />
          <Tab label="Edit Contact Page" {...a11yProps(2)} />
          <Tab label="Edit Social Links" {...a11yProps(3)} />
          <Tab label="Contact Requests" {...a11yProps(4)} />
          <Tab label="Add Admin" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{margin:"16px"}}>
        <AdminHome/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{margin:"16px"}}>
          <AdminService/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{margin:"16px"}}>
          <AdminContact/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box sx={{margin:"16px"}}>
          <AdminSocialIcon/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Box sx={{margin:"16px"}}>
          <ContactRequest/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Box sx={{margin:"16px"}}>
          <AddAdmin/>
        </Box>
      </TabPanel>
    </Box>
  );
}