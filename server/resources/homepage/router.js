var mongoose = require('mongoose');

exports.init = function (app) {

    app.get('/api/homepage', function (req, res) {

        var Homepage = mongoose.model('Homepage');

        Homepage.find(function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }

        });

    });

    app.post('/api/homepage', function (req, res) {

        var Homepage = mongoose.model('Homepage');
        var homepage = new Homepage(req.body);

        homepage.save(function (err) {
            if (!err) {
                res.send(homepage);
            } else {
                res.sendStatus(400);
            }

        });

    });

    app.put('/api/homepage/:id', function (req, res) {

        var homepageData = req.body;
        var homepageId = req.params.id;

        var Homepage = mongoose.model('Homepage');

        Homepage.findByIdAndUpdate(homepageId, homepageData, {'new': true}, function (err, doc) {

            if (!err) {
                res.send(doc);
            } else {
                res.sendStatus(400);
            }

        });

    });

    app.delete('/api/homepage/:id', function (req, res) {

        var id = req.params.id;
        var Homepage = mongoose.model('Homepage');

        Homepage.findByIdAndRemove(id, function (err, doc) {

            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }

        });

    });

};