import React, { useState } from 'react';
import { AppBar, Tabs, Toolbar } from '@mui/material';
import { footerItems } from '../componentData/footerData';
import { useStyles } from '../style/footerStyle';
import { Box } from '@mui/system';

const Footer = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  return (
    <AppBar position="static" color="primary" sx={{ height: '10rem' }}>
      <Toolbar className={classes.toolbarMargin} disableGutters>
        <Tabs value={value} onChange={handleChange}>
          {footerItems.map((data, i) => (
            <Box key={i}>
              <img className={classes.logo} alt="logo" src={data.logo} />
            </Box>
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
