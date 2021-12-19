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

exports.updateClient = async (req,res) => {
    try {
        const client = await Client.findById( req.params.id );

        client.name = req.body.name;

        client.save();

        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
};

exports.deleteClient = async (req,res) => {
    try {
        await Client.findByIdAndRemove( req.params.id );
        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
};