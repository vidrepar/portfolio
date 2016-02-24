var mongoose = require('mongoose');

var schema = mongoose.Schema({

  title           : String,
  description     : String,
  date            : { type:Date, default:Date.now },
  coverImage      : { fileName:String, path:String },
  sections         : [
    {
      title:String,
      image:{
        fileName:String,
        path:String
        }
    } ]

});

mongoose.model('Project', schema);
