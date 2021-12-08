const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    
    image : {
        type : String,
        required : true
    },
    Fname : {
        type : String,
        required : true
    },
    Lname : {
        type: String,
        required : true
    },
    job : {
        type : String,
        required : true
    },
    github : {
        type : String,
        required : false
    },
    medium : {
        type : String,
        required : false
    },
    linkedin : {
        type : String,
        required : false
    },
    portfolio : {
        type : mongoose.Schema.Types.ObjectID,
        ref : 'Portfolio'
    }
});