import { CardActions, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

export const useStyles = makeStyles((theme) => ({
  cardContent: {
    backgroundColor: '#2082d3',
    justifyContent: 'center',
    display: 'flex',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },

  cardMedia: {
    objectFit: 'contain !important'
  },
  cardTitle: {
    fontWeight: '700 !important',
    fontSize: '1.25rem !important'
  },
  cardHeader: {
    fontWeight: '500 !important',
    fontSize: '.625rem !important',
    whiteSpace: 'nowrap'
  }
}));
export const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
  objectFit: 'contain'
}));
export const CardActionsStyle = styled(CardActions)(({ theme }) => ({
  padding: '0 !important',
  position: 'relative !important',
  bottom: '4px !important',
  right: '4px !important'
}));
