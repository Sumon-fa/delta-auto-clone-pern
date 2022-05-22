import { Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import useStyles, { KirjaduButton, TypographyStyle } from '../style/loginStyle';
import React from 'react';
import { VisibilityOff } from '@mui/icons-material';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import Modal from '../../common/Modal';
const Login = (props) => {
  const classes = useStyles();

  return (
    <Modal onClose={props.onClose}>
      <Paper elevation={0} className={classes.form} item="true" xs={12}>
        <Grid container item xs={12}>
          <TypographyStyle>Kirjaudu OmaDeltaan</TypographyStyle>
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: '1rem', lineHeight: 1.3, color: '#000' }}>
            OmaDeltasta löydät kaiken asiakkuuteesi ja autoosi liittyvän. Voit varata huoltoja sekä
            esimerkiksi hakea rahoituspäätöksen uudelle autolle.
          </Typography>
        </Grid>

        <Grid>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.textFields}
              fullWidth
              autoComplete="email"
              autoFocus
              type="email"
              variant="outlined"
              margin="normal"
              label="Sähköposti"
              name="email"
              required
            />

            <TextField
              className={classes.textFields}
              fullWidth
              type="password"
              variant="outlined"
              margin="normal"
              label="Salasana"
              name="password"
              required
              InputProps={{
                endAdornment: (
                  <IconButton aria-label="toggle password visibility">
                    <VisibilityOff />
                  </IconButton>
                )
              }}
            />
            <Typography sx={{ textAlign: 'right' }}>Oletko unohtanut salasanasi?</Typography>
            <Grid container className={classes.button}>
              <Grid item xs={12}>
                <KirjaduButton type="submit">Kirjaudu</KirjaduButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid />
        <Grid
          container
          className={classes.containerSection}
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
          <Grid item xs={6} className={classes.googleSignIn}>
            <GoogleLogin />
          </Grid>
          <Grid item xs={6} className={classes.googleSignIn}>
            <FacebookLogin onClick={props.onClose} />
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default Login;
