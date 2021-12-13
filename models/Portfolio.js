const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    shortDesc : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    longDesc : {
        type: String,
        required : true
    },
    createdDate : {
        type : Date,
        default : Date.now,
        unique : true
    },
    client : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Client'
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;