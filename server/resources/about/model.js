var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({

    titleGeneral: String,
    subTitleGeneral: String,
    description: {
        title: String,
        lead: String,
        paragraph: String
    },
    titleAbilities: String,
    stack: [
        {
            title: String,
            abilities: []
        },
        {
            title: String,
            abilities: []
        },
        {
            title: String,
            abilities: []
        }
    ],
    connectTitle: String

});

mongoose.model('About', schema);
