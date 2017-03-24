var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var crypto = require('crypto');
var base64url = require('base64url');

exports.init = function (app) {

    // Check login status
    app.get('/api/login-status', function(req, res){

        if ( req.user ) {
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }

    });

    // Login
    app.post('/api/login', function (req, res) {

        var data = req.body;
        var email = data.email;
        var password = data.password;

        var User = mongoose.model('User');
        User.findOne({ email: email }, function (err, userDoc) {
            // compare the plain text email sent from the browser
            // with the hashed password stored in the database
            // belonging to this user ( email )
            bcrypt.compare(password, userDoc.password, function (err, match) {

                if ( match === true ) {

                    var token = {
                        token:generateToken(30)
                    };

                    userDoc.tokens.push(token);

                    userDoc.save(function (err) {
                        return res.send(token);
                    });

                } else {
                    return res.sendStatus(401);
                }

            });

        });

    });

    // Register
    app.post('/api/register', function (req, res) {

        var data = req.body;
        var password = data.password;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {

                var userDoc = {
                    email: data.email,
                    password: hash
                };

                var User = mongoose.model('User');
                var user = new User(userDoc);
                user.save(function (err) {

                    if ( !err ) {
                        console.log('Registered');
                        res.send(user);
                    } else {
                        console.log(err);
                        res.sendStatus(400);
                    }

                });

            });
        });

    });

    app.get('/api/register', function (req, res) {

        var User = mongoose.model('User');

        User.find(function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }

        });

    });

};

function generateToken(size) {
    return _randomStringAsBase64Url(size);
}

function _randomStringAsBase64Url(size) {
    return base64url(crypto.randomBytes(size));
}