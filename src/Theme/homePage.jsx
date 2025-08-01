
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'



function homePage() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0 }}>
      <AppBar position="fixed" sx={{ left: 0, right: 0, top: 0, width: '100vw' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GetHired
          </Typography>
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </AppBar>
      <Box sx={{ paddingTop: '64px', padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to GetHired
        </Typography>
        <Typography variant="body1">
          This is the home page where you can find various resources to help you get hired.
        </Typography>
      </Box>
    </Box>
  )
}

export default homePage