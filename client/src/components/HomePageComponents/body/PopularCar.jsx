import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useStyles } from '../style/popularCarStyle';
import { popularCarData } from '../componentData/popularCarData';
import CommonCard from '../../common/CommonCard';

const PopularCar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Typography variant="h3" className={classes.title}>
        Suosituimmat autot
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3 }}>
        {popularCarData.map((car, i) => (
          <CommonCard
            key={i}
            condition={car.condition}
            year={car.year}
            name={car.name}
            image={car.image}
            content={car.content}
            installment={car.installment}
            price={car.price}
            xs={3}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default PopularCar;
