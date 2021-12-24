const Portfolio = require('../models/Portfolio');

exports.getAllPortfolio = async (req,res) => {
    const portfolios = await Portfolio.find().populate('category').sort('-createdDate');
    res.status(200).render('portfolios', {
        portfolios
    });
};

exports.getPortfolio = async (req,res) => {
    try {
        const portfolio = await Portfolio.findById( req.params.id );

        res.redirect(200, '/portfolios', {
            portfolio,
        });
        
    } catch (error) {
        console.log(error);
    }
}

exports.createPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.create({
            name : req.body.name,
            shortDesc : req.body.shortDesc,
            image : req.body.image,
            longDesc : req.body.longDesc,
            team : req.body.team,
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

exports.updatePortfolio = async (req,res) => {
    try {
        const portfolio = await Portfolio.findById( req.params.id );
        portfolio.name = req.body.name;
        portfolio.shortDesc = req.body.shortDesc;
        portfolio.longDesc = req.body.longDesc;
        portfolio.client = req.body.client;
        portfolio.category = req.body.category;
        portfolio.image = req.body.image;

        portfolio.save();

        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
};

exports.deletePortfolio = async (req,res) => {
    try {
        await Portfolio.findByIdAndRemove( req.params.id );
        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
};