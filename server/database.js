var mongoose = require('mongoose');

var db = mongoose.connection;

exports.connect = function(cb){

	mongoose.connect('mongodb://admin:SlamSuNg@ds055925.mongolab.com:55925/heroku_cqp0f4zb');

	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function () {

	  console.log('Connection to database open');
	  cb();

	});

};

exports.getDatabase = function(){

	return db;

};
