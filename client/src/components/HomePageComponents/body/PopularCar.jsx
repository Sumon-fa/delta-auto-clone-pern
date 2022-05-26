import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useStyles } from '../style/popularCarStyle';
import CommonCard from '../../common/CommonCard';
import axios from 'axios';

const PopularCar = () => {
  const classes = useStyles();
  const [carData, setCardata] = useState([]);
  const fetchCarData = useCallback(async () => {
    try {
      const { data } = await axios.get('/api/v1/admin/cars');
      console.log(data);
      setCardata(data.cars);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  useEffect(() => {
    fetchCarData();
  }, [fetchCarData]);

  return (
    <Box className={classes.section}>
      <Typography variant="h3" className={classes.title}>
        Uudet autot
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 3 }}>
        {carData.map((car) => (
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
