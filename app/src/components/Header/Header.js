import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import makeStyles from './styles';
import { Box } from '@mui/material';


function Header() {
  const styles = makeStyles();
  return (
    <AppBar position="static">
        <Box sx={styles.toolbar} >
          <Link to="/">Upload</Link>
          <Link to="/view">All Files</Link>
        </Box>
      </AppBar>
  )
}

export default Header