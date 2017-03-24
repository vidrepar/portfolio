var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({

    email   : { type: String, unique:true },
    password: String,
    dateTime: { type: Date, default: Date.now },
    tokens  : [{
        token: String,
        expires: { type: Date, default: function () { return +new Date() + 14*24*60*60*1000 } },
        dateCreated:{ type:Date, default:Date.now }
    }]

});

mongoose.model('User', schema);
