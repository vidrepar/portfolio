var mongoose = require('mongoose');
var _ = require('lodash');

module.exports = function (req, res, next) {

                                                // Don't forget to return; you can't set headers after they are sent
    if ( _.includes(publicRoutes, req.url) ) {  return next();  }

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

var publicRoutes = [ '/api/login', '/api/register' ];