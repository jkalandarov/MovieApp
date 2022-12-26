const express = require('express')
const router = express.Router();

const Home = require('../controllers/home.page');

router.get('/', Home.home);
router.get('/test', Home.test);

module.exports = router;