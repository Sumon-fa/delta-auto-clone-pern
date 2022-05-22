import styled from '@emotion/styled';
import { Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    margin: 'auto',
    minHeight: '5rem !important'
  },
  logo: {
    height: '3rem',
    width: '5rem',
    margin: '18px'
  },
  toolbar: {
    minHeight: '5rem !important'
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
