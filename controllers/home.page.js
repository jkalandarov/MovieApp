const db = require('../db/db');

exports.home = async (req, res) => {
  res.json(db.mainPage);
}