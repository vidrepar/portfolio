var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({

    email   : { type:String, unique:true },
    password: String,
    dateTime: { type:Date, default: Date.now },
    tokens  : [{ token: String, dateCreated:{ type:Date, default:Date.now } }]

});

mongoose.model('User', schema);
