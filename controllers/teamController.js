const Team = require('../models/Team');

exports.getAllTeam = async (req,res) => {
    const teams = await Team.find();
    res.status(200).render('team',{
        teams,
    });
};

exports.createTeam = async (req, res) => {
    try {
        const team = await Team.create({
            image : req.body.image,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            job : req.body.job,
            github : req.body.github,
            medium : req.body.medium,
            linkedin : req.body.linkedin,
            portfolio : req.body.portfolio,
        });
        // console.log(team);
        res.status(201).redirect('/admin');
    } catch (error) {
        console.log(error);
        // res.status(400).redirect('/admin');
    }
};

exports.updateTeam = async (req,res) => {
    try {
        const team = await Team.findById( req.params.id );

        team.firstName = req.body.firstName;
        team.lastName = req.body.lastName;
        team.job = req.body.job;
        team.github = req.body.github;
        team.medium = req.body.medium;
        team.linkedin = req.body.linkedin;
        team.portfolio = req.body.portfolio;
        team.image = req.body.image;

        team.save();

        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
};

exports.deleteTeam = async (req,res) => {
    try {
        await Team.findByIdAndRemove( req.params.id );
        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
};