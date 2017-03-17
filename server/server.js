var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var router = require('./router');

var PORT = process.env.PORT || 3000;

global.APP = app;

// Initialization of our server
exports.start = function () {

    // middlewares for processing the request
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(allowCrossDomain);

    app.set('view engine', 'ejs');

    // serve content from the public folder
    app.use('/assets', serveStatic('assets'));
    app.use('/cms-dev', serveStatic('cms-dev'));
    app.use('/cms', serveStatic('cms-dist'));
    app.use('/assets', serveIndex('assets'));

    app.listen(PORT, function () {

        console.log('Server running on http://localhost:' + PORT);
        router(app);

    });

};

//CORS middleware
var allowCrossDomain = function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();

};
