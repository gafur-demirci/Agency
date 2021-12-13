const Category = require("../models/Category");
const Client = require('../models/Client');
const Portfolio = require('../models/Portfolio');
const Team = require("../models/Team");

exports.getIndexPage = (req, res) => {
    res.status(200).render('index');
}

exports.getAboutPage = (req, res) => {
    res.status(200).render('about');
}

exports.getContactPage = (req, res) => {
    res.status(200).render('contact');
}

exports.getAdminPage = async (req, res) => {
    const categories = await Category.find();
    const clients = await Client.find();
    const portfolios = await Portfolio.find();
    const teams = await Team.find();
    res.status(200).render('admin', {
        categories,
        clients,
        portfolios,
        teams
    });
}