import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@mui/material';
import React from 'react';
import { useStyles } from './cardStyle';
import { CardMediaStyle } from './cardStyle';
import { CardActionsStyle } from './cardStyle';

const CommonCard = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={props.xs}>
      <Card sx={{ height: '21rem' }}>
        <CardActions>
          <Button size="small">{props.condition}</Button>
          <Button sx={{ margin: '0 0 0 auto !important', textTransform: 'none' }} size="small">
            {props.year}
          </Button>
        </CardActions>
        <CardMediaStyle
          classes={{ image: classes.CardMedia }}
          component="img"
          alt={props.name}
          height="140"
          image={props.image}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6">{props.content}</Typography>
        </CardContent>
        <CardHeader
          classes={{ title: classes.cardTitle }}
          title={props.name}
          subheader={props.model}
          subheaderTypographyProps={{
            fontWeight: '500',
            fontSize: '.625rem',
            whiteSpace: 'nowrap'
          }}
        />
        <CardActionsStyle>
          <Button size="small">{props.price} € </Button>
          <Button
            sx={{ margin: '0 0 0 auto !important', textTransform: 'none', color: '#95b82b' }}
            size="small">
            {props.installment} €/kk
          </Button>
        </CardActionsStyle>
      </Card>
    </Grid>
  );
};

export default CommonCard;
