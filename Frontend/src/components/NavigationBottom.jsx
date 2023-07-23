import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {useState} from 'react';
import { Paper } from '@mui/material';
const NavigationBottom = () => {
    const [value, setValue] = useState(0);


return(
<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
<BottomNavigation showLabels  value={value}  onChange={(event, newValue) => {    setValue(newValue);  }}>
<BottomNavigationAction label="Categories" icon={<GridViewIcon fontSize="large"/>} />
  <BottomNavigationAction label="Transactions" icon={<LocalOfferOutlinedIcon fontSize="large" />} />
  <BottomNavigationAction label="Stats" icon={< DataUsageOutlinedIcon fontSize="large"/>}  />
  <BottomNavigationAction label="Other" icon = {<MenuOutlinedIcon fontSize="large" />} />
</BottomNavigation>
</Paper>
)}
export default NavigationBottom