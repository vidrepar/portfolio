var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

	title		      : { type:String, required:true},
	description	  : { type:String },
	timeStamp	    : { type:Date, default:Date.now },
	url 		      : String,
	imageUrl	    : String,
  author        : String,
  coverImgUrl   : String,

  sectionOne : {
    title       : String,
    imageUrl    : String
  },
  sectionTwo : {
      title     : String,
      imageUrl  : String
    },
  sectionThree : {
      title     : String,
      imageUrl  : String
    },
  sectionFour : {
      title     : String,
      imageUrl  : String
    },
  sectionFive : {
      title     : String,
      imageUrl  : String
    }

});

var myProject = mongoose.model('Project', projectSchema);
