import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  var navigate=useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  function handleClicks(item){
   
    if(item.title!="Logout")
    {
    navigate(item.addr)
    } 
  }

  const menuItems = [{title:'Home',addr:"/"}];

  return (
    <div>
      <AppBar position="static" style={{background:"black"}}>
        <Toolbar>
          { isMobile?<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>:
          <></>}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            VEERAJ BLOGS
          </Typography>
          {!isMobile && menuItems.map((item, index) => (
            <Typography key={index} variant="button" sx={{ marginLeft: '20px' }} onClick={()=>{handleClicks(item)}} >
              {item.title}
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        style={{backgroundColor:"black" ,width:"40vw"}}
      >
        <List style={{width:"100%",background:"black",height:"100%",color:'white'}} >
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerToggle}>
              <ListItemText primary={item.title}  onClick={()=>{handleClicks(item)}}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
