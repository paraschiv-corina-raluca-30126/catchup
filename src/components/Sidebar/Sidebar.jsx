import { Box, Divider, List, ListItem, ListItemButton,ListItemText } from '@mui/material'
import React from 'react'
import { Create, LeaderboardOutlined, PauseOutlined, PlayArrowOutlined} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Box sx={{ width:'250px', bgcolor: 'background.paper',boxShadow:1, justifyItems:'center'}} >
         <nav aria-label="main mailbox folders">
        <List  sx={{mt:10}}>
          <ListItem sx={{ml:7}}><NavLink to='/home' style={{color:'black'}}>Matematica</NavLink></ListItem>
          <Divider />
          <NavLink to='/home/my-notes' style={{color:'black'}}> <ListItem disablePadding>
          <ListItemButton>
                <Create fontSize='small' sx={{ml:4}}/>
                 <ListItemText sx={{ml:1}} primary="My Notes" />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/home/leaderboard'  
                style={{color:'black'}}> <ListItem disablePadding>
          <ListItemButton>
                <LeaderboardOutlined fontSize='small' sx={{ml:4}}/>
                <ListItemText sx={{ml:1}} primary="Leaderboard" />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/home/courses-history' style={{color:'black'}}>  <ListItem disablePadding>
          <ListItemButton>
                <PauseOutlined fontSize='small' sx={{ml:4}}/>
                <ListItemText sx={{ml:1}} primary="Courses History" />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/home/study-session' style={{color:'black'}}>  <ListItem disablePadding>
          <ListItemButton>
                <PlayArrowOutlined fontSize='small' sx={{ml:4}}/>
               <ListItemText sx={{ml:1}} primary="Study Session" />
            </ListItemButton>
          </ListItem></NavLink>
        </List>
      </nav>
    </Box>
  )
}

export default Sidebar