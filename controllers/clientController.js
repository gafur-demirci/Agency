const Client = require('../models/Client');

exports.getAllClient = async (req,res) => {
    const clients = await Client.find();
    res.status(200).render('admin', {
        clients,
    });
};

exports.createClient = async (req, res) => {
    try {
        const client = await Client.create({
            name : req.body.name,
        });
        // console.log(client);
        res.status(201).redirect('/admin');
    } catch (error) {
        console.log(error);
        // res.status(400).redirect('/admin');
    }
};

exports.updateClient = (req,res) => {
    pass
};

exports.deleteClient = (req,res) => {
    pass
};