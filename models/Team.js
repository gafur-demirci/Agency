const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    
    image : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
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
    addedDate : {
        type : Date,
        default : Date.now,
        unique : true
    },
    portfolio : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Portfolio'
    }
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;