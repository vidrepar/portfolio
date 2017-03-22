var mongoose = require('mongoose');

exports.init = function (app) {

    app.get('/api/about', function (req, res) {

        var About = mongoose.model('About');

        About.find(function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }

        });

    });

    app.post('/api/about', function (req, res) {

        var About = mongoose.model('About');
        var about = new About(req.body);

        about.save(function (err) {
            if (!err) {
                res.send(about);
            } else {
                res.sendStatus(400);
            }

        });

    });

    app.put('/api/about/:id', function (req, res) {

        var aboutData = req.body;
        var aboutId = req.params.id;

        var About = mongoose.model('About');

        About.findByIdAndUpdate(aboutId, aboutData, {'new': true}, function (err, doc) {

            if (!err) {
                res.send(doc);
            } else {
                res.sendStatus(400);
            }

        });

    });


    app.delete('/api/about/:id', function (req, res) {

        var id = req.params.id;
        var About = mongoose.model('About');

        About.findByIdAndRemove(id, function (err, doc) {

            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }

        });

    });

};