const Category = require('../models/Category');

exports.getAllCategory = async (req,res) => {
    const categories = await Category.find();
    res.status(200).render('admin', {
        categories,
    });
};

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create({
            name : req.body.name,
        });
        // console.log(category);
        res.status(201).redirect('/admin');
    } catch (error) {
        console.log(error);
        // res.status(400).redirect('/admin');
    }
};

exports.updateCategory = async (req,res) => {
    try {
        const category = await Category.findById( req.params.id );
        category.name = req.body.name;

        category.save();

        res.status(200).redirect('/admin');

    } catch (error) {
        console.log(error);
    }
};

exports.deleteCategory = async (req,res) => {
    try {
        await Category.findByIdAndRemove( req.params.id );
        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
};