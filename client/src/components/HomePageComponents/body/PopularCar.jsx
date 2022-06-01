import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useStyles } from '../style/popularCarStyle';
import CommonCard from '../../common/CommonCard';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../../store/actions/carActions';
const PopularCar = () => {
  const classes = useStyles();
  const dispatch=useDispatch()
  const { loading, error, cars } = useSelector(state => state.cars)
    
   useEffect(()=>{
dispatch(getAllCars())

   },[dispatch])

  

  return (
    <Box className={classes.section}>
      <Typography variant="h3" className={classes.title}>
        Uudet autot
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3 }}>
        {cars.map((car) => (
          <CommonCard
            key={car.car_id}
            condition={car.condition}
            year={car.year}
            name={car.name}
            image={car.image}
            description={car.description}
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
