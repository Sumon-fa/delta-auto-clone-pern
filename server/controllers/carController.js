const client = require('../db/db');
const HttpError = require('../middlewares/http-error');
exports.newCar = async (req, res, next) => {
  const {
    name,
    model,
    description,
    year,
    image,
    condition,
    installment,
    price,
  } = req.body;

  try {
    const cars = await client.query(
      'INSERT INTO car (name,model,description,year,image,condition,installment,price) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
      [name, model, description, year, image, condition, installment, price]
    );
    res.json(cars.rows);
  } catch (err) {
    res.json(err);
  }
};
exports.getAllCars = async (req, res, next) => {
  try {
    const cars = await client.query('SELECT * FROM car');
    res.json({ cars: cars.rows });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.getSingleCar= async (req, res, next) => {
  const {id}=req.params
  
  try {
    const car = await client.query('SELECT * FROM car WHERE car_id=$1',[id]);
    res.json({ car: car.rows });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.updateCar= async (req, res, next) => {
  const {id}=req.params
  const {
    name,
    model,
    description,
    year,
    image,
    condition,
    installment,
    price,
  } = req.body;
  
  try {
    const car = await client.query('UPDATE car SET name=$1,model=$2,description=$3,year=$4,image=$5,condition=$6,installment=$7,price=$8 where car_id=$9',
    [name, model, description, year, image, condition, installment, price,id]);
    res.json({ message:'success'});
  } catch (err) {
    console.log(err.stack);
    res.json(err);
  }
};
exports.deleteCar= async (req, res, next) => {
  const {id}=req.params
  
  
  try {
    const car = await client.query('DELETE FROM car where car_id=$1',
    [id]);
    res.json({ message:'success'});
  } catch (err) {
    console.log(err.stack);
    res.json(err);
  }
};
