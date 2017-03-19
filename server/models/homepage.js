var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({

    content: [
        {
            title: String,
            subTitle: String
        },
        {
            title: String,
            abilities: []
        },
        {
            title: String,
            abilities: []
        }
    ]

});

mongoose.model('Homepage', schema);
