const Portfolio = require('../models/Portfolio');

exports.getAllPortfolio = async (req,res) => {
    const portfolios = await Portfolio.find();
    res.status(200).render('portfolio', {
        portfolios
    });
};

exports.createPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.create({
            name : req.body.name,
            shortDesc : req.body.shortDesc,
            image : req.body.image,
            longDesc : req.body.longDesc,
            client : req.body.client,
            category : req.body.category,
        });
        // console.log(team);
        res.status(201).redirect('/admin');
    } catch (error) {
        console.log(error);
        // res.status(400).redirect('/admin');
    }
};

exports.updatePortfolio = (req,res) => {
    pass
};

exports.deletePortfolio = (req,res) => {
    pass
};