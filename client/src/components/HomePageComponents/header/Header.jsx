import React, { Fragment } from 'react';
import { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import InputIcon from '@mui/icons-material/Input';
import { AppBar, Tabs, Toolbar, Box } from '@mui/material';
import { ColorTab, ColorButton, SecondTab, useStyles } from '../style/headerStyle';
import { navData, secondNavData } from '../componentData/headerData';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import navButtonLogo from '../../../assets/navButtonLogo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Drawer from './Drawer';
import Login from './Login';
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [secondvalue, setSecondValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoginShow, setLoginShow] = useState(false);
  function handleChange(e, newValue) {
    setValue(newValue);
  }
  function handleChangeSecondBar(e, newValue) {
    setSecondValue(newValue);
  }
  const loginShowHandler = () => {
    setLoginShow(true);
  };
  const loginHideHandler = () => {
    setLoginShow(false);
  };
  console.log(isLoginShow);
  const tabs = (
    <Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
        {navData.map((nav, i) => (
          <ColorTab key={i} icon={<nav.icon />} label={nav.label} />
        ))}
      </Tabs>
    </Fragment>
  );
  const secondTabs = (
    <Fragment>
      <Tabs value={secondvalue} onChange={handleChangeSecondBar}>
        <SecondTab label="Uudet autot" />
        <Box onClick={() => setOpenDrawer(!openDrawer)} sx={{ cursor: 'pointer' }}>
          <KeyboardArrowDownIcon className={classes.keyboardArrow} />
        </Box>

        {secondNavData.map((nav, i) => (
          <SecondTab key={i} label={nav.label} />
        ))}
      </Tabs>
    </Fragment>
  );
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="static" color="secondary">
          <Toolbar className={classes.toolbar} disableGutters>
            {tabs}
            <Box
              sx={{ margin: 'auto', position: 'relative', left: '2rem' }}
              component={Link}
              to="/">
              <img className={classes.logo} alt="logo" src={logo} />
            </Box>
            <ColorButton variant="contained" onClick={loginShowHandler}>
              <InputIcon className={classes.inputIcon} />
              <img className={classes.navButtonLogo} alt="navButtonlogo" src={navButtonLogo} />
            </ColorButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <ElevationScroll>
        <AppBar position="static" className="rr">
          <Toolbar className={classes.secondToolbarMargin} disableGutters>
            {secondTabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        openDrawer={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      />

      {isLoginShow && <Login onClose={loginHideHandler} />}
    </Fragment>
  );
};
export default Header;
