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
            subTitle: String
        },
        {
            title: String,
            subTitle: String
        }
    ]

});

mongoose.model('Homepage', schema);
