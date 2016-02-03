var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();

var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var database    = require('./../database');
var router      = require('./router');

var PORT = process.env.PORT || 3000;

GLOBAL.APP = app;

// Initialization of our server

exports.start = function(){

    // middlewares for processing the request
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());
	app.use(allowCrossDomain);

  app.set('view engine', 'ejs');

  // serve content from the public folder
  app.use('/', serveStatic('public'));
  app.use('/cms', serveStatic('cms-dev/dist'));
  app.use('/', serveIndex('public'));

  // serve content from the cms folder
	app.use('/cms', express.static('cms'));

	database.openDatabase(function(){

		setupModels();

		app.listen(PORT, function(){

            // routes for our API in our router
			      router(app);
            console.log('Server running on http://localhost:'+PORT);

		});

	});

}

exports.stop = function(){



};

function setupModels(){

    require('./../models/file');
	  require('./../models/project');
    require('./../models/post');
    require('./../models/inquiry');


}

//CORS middleware
var allowCrossDomain = function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();

}
