import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React, { Fragment } from 'react';
import { drawerItems } from '../componentData/drawerData';
import { useStyles } from '../style/drawerStyle';

const Drawer = (props) => {
  const classes = useStyles();
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={props.openDrawer}
        onClose={props.onClose}
        onOpen={props.onOpen}
        classes={{ paper: classes.drawer }}>
        <Grid container sx={{ padding: '6% 0 0 3%', color: '#fff' }}>
          <Grid item xs={2}>
            <Typography>Heti ajoon</Typography>
          </Grid>
          <Grid item xs={9.7}>
            <div
              style={{
                width: '100%',
                borderBottom: '1px solid',
                margin: 0,
                position: 'relative',
                top: '13px'
              }}></div>
          </Grid>
        </Grid>
        <List>
          <Grid container>
            {drawerItems.map((car, i) => (
              <Grid item xs={6} key={i}>
                <ListItem onClick={props.onClose}>
                  <ListItemIcon>
                    <img className={classes.drawerImage} alt={car.name} src={car.logo} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    className={classes.drawerItem}
                    primary={car.name}
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
};

export default Drawer;
