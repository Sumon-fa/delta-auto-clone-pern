import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux'
import store from './store/store';
const dark = '#111';
const white = '#fff';
const blue = '#1281d5';
const darkBlue = '#0069ac';

const theme = createTheme({
  palette: {
    common: {
      dark: `${dark}`,
      white: `${white}`,
      darkBlue: `${darkBlue}`,
      blue: `${blue}`,
      green: '#757575'
    },
    primary: {
      main: `${blue}`
    },
    secondary: {
      main: `${darkBlue}`
    },
    neutral: {
      main: '#8fbb00'
    }
  },

  typography: {
    h2: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '2.125rem',
      lineHeight: '2.625rem',
      color: '#fff'
    },
    h6: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontWeight: 600,
      color: '#fff',
      fontSize: '0.75rem',
      lineHeight: 1,
      letterSpacing: '0.0075em'
    },
    h3: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontWeight: 600,
      lineHeight: 1,
      fontSize: '2.125rem',
      color: '#2082d3'
    },
    tab: {
      fontFamily: 'Raleway ',
      textTransform: 'none',
      color: '#000',
      fontWeight: 700,
      fontSize: '1rem'
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter></Provider>
);
