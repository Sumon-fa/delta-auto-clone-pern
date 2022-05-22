import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Tab } from '@mui/material';
export const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: 'auto'
  },
  icon: {
    marginLeft: 'auto !important',
    height: '50px !important',
    width: '50px !important'
  },
  logo: {
    height: '2rem',
    width: '10rem'
  },
  toolbar: {
    minHeight: '5rem !important',
    marginLeft: '3rem'
  },

  inputIcon: {
    height: 'auto',
    width: '17px !important',
    position: 'relative',
    bottom: '9px',
    left: '54px',
    color: '#0054b1'
  },
  navButtonLogo: {
    position: 'relative',
    bottom: '22px'
  },
  secondToolbarMargin: {
    margin: 'auto'
  },
  keyboardArrow: {
    margin: 'auto',
    position: 'relative',
    right: '15px',
    top: '10px',
    color: '#95b82b '
  }
}));
export const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ffd500',
  marginLeft: 'auto',
  marginRight: '25px',
  height: '3rem',
  width: '8rem',
  display: 'block',
  '&:hover': {
    backgroundColor: '#ffd500'
  }
}));
export const ColorTab = styled(Tab)(({ theme }) => ({
  fontFamily: ['Open Sans', 'sans-serif'].join(','),
  textTransform: 'none',
  color: '#ffd500 !important',
  fontWeight: 600,
  fontSize: '.75rem',
  lineHeight: 0.6,
  paddingRight: '1rem',
  paddingLeft: '1rem'
}));
export const SecondTab = styled(Tab)(({ theme }) => ({
  fontFamily: ['Open Sans', 'sans-serif'].join(','),
  textTransform: 'none',
  color: '#fff !important',
  fontWeight: 600,
  fontSize: '1em',
  lineHeight: 1.3,
  paddingRight: '1rem',
  paddingLeft: '1rem'
}));
