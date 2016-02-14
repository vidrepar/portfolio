var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

	title		      : { type:String, required:true},
	description	  : { type:String },
	timeStamp	    : { type:Date, default:Date.now },
	url 		      : String,
	imageUrl	    : { fileName:String, path:String },
  images        : [ { fileName:String, path:String } ],
  author        : String

});

var myProject = mongoose.model('Project', projectSchema);
