var mongoose = require('mongoose');

exports.init = function (app) {

    app.get('/api/projects', function (req, res) {

        var Project = mongoose.model('Project');

        Project.find(function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }

        });

    });

    app.post('/api/project', function (req, res) {

        var Project = mongoose.model('Project');

        var project = new Project(req.body);

        project.save(function (err) {
            if (!err) {
                res.send(project);
            } else {
                res.sendStatus(400);
            }

        });

    });

    app.delete('/api/project/:id', function (req, res) {

        var id = req.params.id;
        var Project = mongoose.model('Project');

        Project.findByIdAndRemove(id, function (err, doc) {

            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }

        });

    });

    app.get('/api/project/:id', function (req, res) {

        var Project = mongoose.model('Project');

        Project.findById(req.params.id, function (err, doc) {

            console.log('req.params.id', req.params.id);

            if (doc) {
                res.send(doc);
            } else {
                res.sendStatus(404);
            }

        });

    });

    app.put('/api/project/:id', function (req, res) {

        var projectData = req.body;
        var projectId = req.params.id;

        var Project = mongoose.model('Project');

        Project.findByIdAndUpdate(projectId, projectData, {'new': true}, function (err, doc) {

            if (!err) {
                res.send(doc);
            } else {
                res.sendStatus(400);
            }

        });

    });

};