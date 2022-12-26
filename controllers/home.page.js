const db = require('../db/db');

exports.home = async (req, res) => {
  res.status(200).json(db.mainPage);
}

exports.test = async (req, res) => {
  res.status(200).send('Working! 👌');
}