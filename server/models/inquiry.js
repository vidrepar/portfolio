var mongoose = require('mongoose');

var inquirySchema = mongoose.Schema({

	title		      : { type:String, required:true},
	email		      : { type:String, required:true},
	message	      : { type:String },
	timeStamp	    : { type:Date, default:Date.now }

});

mongoose.model('Inquiry', inquirySchema);
