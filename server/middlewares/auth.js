var mongoose = require('mongoose');
var _ = require('lodash');

module.exports = function (req, res, next) {

    var regExp = req.url.match(/^\/(api).*(?:\/(?=$))?$/i); // TODO improve regExp to exclude '/api/login', '/api/register'
    if ( null === regExp ||
        regExp[0] === '/api/login' ||
        regExp[0] === '/api/register'
     ) { return next(); } // Don't forget to return; you can't set headers after they are sent

    var token = req.headers['authorization'];

    var User = mongoose.model('User');

    User.findOne({ 'tokens.token': token, 'tokens.expires':{ $gt:Date.now() } }, function (err, doc) {

        if ( !doc ) {
            res.sendStatus(401);
        } else {
            req.user = doc;
            next();
        }

    });
};