import React, { useState } from 'react'
import logo from '../../assets/LogoCatchUp.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { auth } from '../../firebase';
import { Avatar, Divider, IconButton, ListItem, Menu, MenuItem } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
const Header = () => {
    const currentUser = auth.currentUser;

    const [displayName, setDisplayName] = useState(currentUser.displayName);
    const [pp, setPp] = useState(currentUser.photoURL);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
      return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color='transparent'>
      <Toolbar>
       <img src={logo} width={140} alt="" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Typography variant="h6" sx={{padding:1}}>{displayName}</Typography>
        <IconButton
         onClick={handleClick}
         size='small'
         disableRipple = {true}
         disableFocusRipple = { true}
         sx={{border:'none', borderRadius:50, outline:'none!important', }}
         aria-controls={open ? 'account-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
       >
        <Avatar src={pp}/>

        </IconButton>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem onClick={handleClose}>
          <ListItem>
            <Logout fontSize="small" />
          </ListItem>
          Logout
        </MenuItem>
      </Menu>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header