const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    Sdesc : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    Ldesc : {
        type: String,
        required : true
    },
    client : {
        type : mongoose.Schema.Types.ObjectID,
        ref : 'Client'
    },
    category : {
        type : mongoose.Schema.Types.ObjectID,
        ref : 'Category'
    }
});