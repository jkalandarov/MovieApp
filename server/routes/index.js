const express = require('express')
const router = express.Router();

const Home = require('../controllers/home.page');

router.get('/', Home.home);

module.exports = router;