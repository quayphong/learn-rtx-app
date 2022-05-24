import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Dashboard, PeopleAlt } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  active: {
    color: 'inherit',
    textDecoration: 'none',
    '& div':{
      backgroundColor: '#b0bec5'
    },
    '& div:hover':{
      backgroundColor: '#b0bec5'
    }
  }
})

export function Sidebar() {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to='/admin/dashboard' className={(navData) => navData.isActive ? classes.active : classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to='/admin/students' className={(navData) => navData.isActive ? classes.active : classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
            </NavLink>
        </List>
      </nav>
    </Box>
  );
}
