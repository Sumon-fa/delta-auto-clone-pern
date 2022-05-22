import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  containerSection: { margin: theme.spacing(4, 0, 0, 0) },

  form_container: {
    display: 'flex',
    position: 'fixed',
    zIndex: 300,
    maxWidth: 'auto',
    height: 'auto',
    left: '50%',
    right: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    bottom: '50%'
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh',
    zIndex: 250,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}));

export default useStyles;
