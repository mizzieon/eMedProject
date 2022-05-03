import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
        <Toolbar>
          <Link to="/">Upload</Link>
          <Link to="/view">All Files</Link>
        </Toolbar>
      </AppBar>
  )
}

export default Header