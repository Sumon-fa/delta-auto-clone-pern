import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: 'auto'
  },

  drawerImage: {
    maxHeight: '3em',
    maxWidth: '3em'
  },
  drawer: {
    backgroundColor: '#3f4251 !important',
    maxWidth: '100%',
    maxHeight: '100vh',
    marginTop: '9em',
    paddingTop: '1em'
  },
  drawerItem: {
    fontSize: '0.875rem',
    color: '#fff',
    fontWeight: '500',
    cursor: 'ponter !important',
    letterSpacing: '0.25em',
    fontFamily: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    marginLeft: '1em'
  }
}));
