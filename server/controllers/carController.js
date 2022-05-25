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
    res.json(cars);
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
