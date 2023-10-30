import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logogapsi from "../../assets/img/logo.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src={logogapsi} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <Typography variant="h6" component="div">
            e-Commerce Gapsi
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;