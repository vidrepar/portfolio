var mongoose = require('mongoose');
var moment   = require('moment');

module.exports = function(app){

    app.get('/', function (req, res) {

        var Homepage = mongoose.model('Homepage');

        Homepage.find(function (err, result) {
            if (!err) {
                res.render('index', {
                    title: 'Welcome',
                    jsSrc: 'assets/js/index.js',
                    homepage: result
                });
            } else {
                console.log(err);
            }

        });

    });

    app.get('/about', function (req, res) {

        var About = mongoose.model('About');

        About.find(function (err, result) {
            if (!err) {
                res.render('about/index', {
                    title: 'About Me',
                    jsSrc: 'assets/js/about.js',
                    about: result
                });
            } else {
                console.log(err);
            }

        });

    });

    app.get('/contact', function (req, res) {

        var Project = mongoose.model('Project');

        Project.find(function (err, docs) {

            res.render('contact/index', {title: 'Contact', jsSrc: 'assets/js/contact.js'});

        });

    });

    app.get('/projects', function (req, res) {

        var Project = mongoose.model('Project');

        Project.find(function (err, docs) {

            res.render('projects/index', {
                title: 'Work',
                projects: docs,
                jsSrc: 'assets/js/project.js',
                moment: moment
            });

        });

    });

    app.get('/projects/:id', function (req, res) {

        var Project = mongoose.model('Project');

        var id = req.params.id;
        Project.findOne({'_id': id}, function (err, result) {
            if (!err) {
                res.render('presentation/index', {
                    title: 'Work',
                    project: result,
                    jsSrc: '/assets/js/presentation.js',
                    moment: moment
                });
            }
        });
    });

};