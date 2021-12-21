const nodemailer = require('nodemailer');
const Category = require("../models/Category");
const Client = require('../models/Client');
const Portfolio = require('../models/Portfolio');
const Team = require("../models/Team");

exports.getIndexPage = async (req, res) => {
    const portfolios = await Portfolio.find();
    const teams = await Team.find();
    res.status(200).render('index', {
        portfolios,
        teams
    });
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

exports.sendEmail = async (req,res) => {
    try {
        const mailTemplate = `
        <h1> Mail Detail</h1>
        <ul>
            <li>Name : ${req.body.name}</li>
            <li>Email : ${req.body.email}</li>
            <li>Phone : ${req.body.phone}</li>
        </ul>
        <h1>Message Detail</h1>
        <p>${req.body.message}</p>
        `;

        const transporter = nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port : 465,
            secure : true,
            auth : {
                user : 'gafur.gs.68@gmail.com',
                pass : 'dxuncocgbfoeqcdk',
            },
        });

        const info = await transporter.sendMail({
            from : '"Agency Contact" <gafur.gs.68@gmail.com>',
            to : 'gafur.gs.68@gmail.com',
            subject : 'Agency Project New Message From Contact',
            html : mailTemplate,
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.status(200).redirect('contact');

    } catch (error) {
        console.log(error);
    }
}