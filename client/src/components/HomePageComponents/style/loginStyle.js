import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  containerSection: { margin: theme.spacing(4, 0, 0, 0) },

  googleSignIn: {
    cursor: 'pointer'
  },

  form: {
    backgroundColor: 'white',
    border: '1rem solid white',
    padding: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '32rem'
  },

  omadelta: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),

    fontWeight: '600 !mportant',
    fontSize: '1.5rem !mportant',
    marginBottom: '2rem',
    color: '#1281d5'
  },
  button: {
    margin: 'auto',
    paddingTop: '1rem'
  },
  tai: {
    paddingTop: '1rem',
    fontFamily: 'initial',
    fontWeight: 600
  },
  forgotPassword: {
    fontFamily: 'initial'
  }
}));

export default useStyles;
export const TypographyStyle = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '1.5rem',
  marginBottom: '0.5rem',
  color: '#1281d5'
}));
export const KirjaduButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  width: '413px',
  opacity: 0.5,
  height: '50px',
  textTransform: 'none',
  borderRadius: '100px',
  backgroundColor: '#1281d5',
  '&:hover': {
    backgroundColor: '#1281d5'
  }
}));
