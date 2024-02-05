import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Purchases from '../Purchases/purchases';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeTab } from '../../redux/reducers/categories/categoriesSlice';

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const CategoryList = () => {
  const dispatch = useDispatch();
  
  const tabSelected = useSelector((state: any) => state.categories.selectedTab);
  const categoriesNumbers = useSelector((state: any) => state.categories.categoriesNumbers);
  const category = categoriesNumbers[tabSelected];
  console.log(category);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(changeTab(newValue));
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabSelected}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Food" {...a11yProps(0)} />
        <Tab label="Health" {...a11yProps(1)} />
        <Tab label="Utilities" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabSelected} index={0}>
        <Purchases  category={category}/>
      </TabPanel>
      <TabPanel value={tabSelected} index={1}>
        <Purchases category={category}/>
      </TabPanel>
      <TabPanel value={tabSelected} index={2}>
          <Purchases category={category}/>
      </TabPanel>
    </Box>
  );
}

export default CategoryList;