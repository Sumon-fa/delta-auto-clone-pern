const pool = require('../db/db');
const HttpError = require('../middlewares/http-error');
exports.newCar = async (req, res, next) => {
  const { name, model, description, year, image, condition, installment } =
    req.body;

  try {
    const cars = await pool.query(
      'INSERT INTO car (name,model,description,year,image,condition,installment) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
      [name, model, description, year, image, condition, installment]
    );
    res.json(cars);
  } catch (err) {
    console.log(err);
  }
};
