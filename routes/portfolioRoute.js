const express = require('express');
const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.route('/').get(portfolioController.getAllPortfolio);
router.route('/:id').get(portfolioController.getPortfolio);

module.exports = router;