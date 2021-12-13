const express = require('express');
const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.route('/').get(portfolioController.getAllPortfolio);

module.exports = router;