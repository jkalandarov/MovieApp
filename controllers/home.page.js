const db = require('../db/db');

exports.home = async (req, res) => {
  res.status(200).json(db.mainPage);
}