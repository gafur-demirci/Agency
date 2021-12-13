const express = require('express');
const portfolioController = require('../controllers/portfolioController');
const teamController = require('../controllers/teamController');
const clientController = require('../controllers/clientController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/portfolio').post(portfolioController.createPortfolio);
router.route('/team').post(teamController.createTeam);
router.route('/client').post(clientController.createClient);
router.route('/category').post(categoryController.createCategory);

// method-override put
router.route('/portfolio/:id').put(portfolioController.updatePortfolio);
router.route('/team/:id').put(teamController.updateTeam);
router.route('/client/:id').put(clientController.updateClient);
router.route('/category/:id').put(categoryController.updateCategory);

// method-override delete
router.route('/portfolio/:id').delete(portfolioController.deletePortfolio);
router.route('/team/:id').delete(teamController.deleteTeam);
router.route('/client/:id').delete(clientController.deleteClient);
router.route('/category/:id').delete(categoryController.deleteCategory);

module.exports = router;