var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({

  title           : String,
  description     : String,
  date            : { type:Date, default:Date.now },
  coverImage      : { fileName:String, path:String, thumbPath:String, ext:String },
  sections        : [
    {
      title:String,
      image:{
        fileName:String,
        path:String
        }
    } ]

});

mongoose.model('Project', schema);
