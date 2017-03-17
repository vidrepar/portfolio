var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({

  titleGeneral            : String,
  subTitleGeneral         : String,
  titleDescription        : String,
  descriptionDescription  : String,
  titleAbilities          : String,
  titleStack              : String,
  listStackAbilities      : String

});

mongoose.model('About', schema);
