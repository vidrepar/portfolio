var mongoose = require('mongoose');
var moment = require('moment');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './assets/images'});
var nodemailer = require('nodemailer');
var token = '2309dfhdsf0lkasdASDasd821lk';

var gm = require('gm');

module.exports = function (app) {

    /*EJS ROUTES ///////////////////////////////////////////////////////////////////////////////*/
    // Landing page route
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
    // About GET route
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
    // Contact GET route
    app.get('/contact', function (req, res) {

        var Project = mongoose.model('Project');

        Project.find(function (err, docs) {

            res.render('contact/index', {title: 'Contact', jsSrc: 'assets/js/contact.js'});

        });

    });
    // Project GET route
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
    //SINGLE Project GET route
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

    // Homepage
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

    // About me
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





    /*API ROUTES ///////////////////////////////////////////////////////////////////////////////*/
    /*projects  ///////////////////////////////////////////////////////////////////////////////*/

    //Projects API GET routes
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
    //Project API POST route
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
    //Project API DELETE route
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


    //SINGLE Project API GET route
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
    //Project API PUT route
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

    //File Upload API POST routes
    app.post('/api/upload', multipartMiddleware, function (req, res) {

        var path = req.files.file.path;

        /* creating a unique FILENAME */
        var uniqueFilenameParts = path.split('\\');
        var uniqueFilename = uniqueFilenameParts[uniqueFilenameParts.length - 1];

        var thumbPath = './assets/thumbs/' + uniqueFilename;

        /* gm conversion to thumbs */
        /* todo gm is not creating thumbnails, fix it */
        gm(path)
            .resize(353, 257)
            .autoOrient()
            .write(thumbPath, function (err) {
                if (!err) console.log(' hooray! ');
            });

        res.send({
            path: path,
            fileName: uniqueFilename
        });

    });

    // API Login routes
    app.post('/api/login', function (req, res) {

        var username = 'franci';
        var password = 'mypassword';

        if (req.body.username === username && req.body.password === password) {
            // UNSERCURE authentication successful
            res.send({token: token});
        } else {
            res.sendStatus(401);
        }

    });

    //Files API GET routes
    APP.get('/api/files', function (req, res) {

        var File = mongoose.model('File');

        File.find(function (err, docs) {

            if (err) {
                res.sendStatus(400);
            } else {

                res.send(docs);

            }

        });

    });
    //Files API POST route
    APP.post('/api/file', function (req, res) {

        var data = req.body;

        console.log(data);

        var File = mongoose.model('File');

        var file = new File(data);

        file.save(function (err) {

            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }

        });

    });

    //Email POST API routes
    app.post('/api/email', function (req, res) {

        //email, message
        var data = req.body;

        sendMail(data.email, data.message, function () {
            res.sendStatus(200);
        });

    });


    //Post  API GET route
    app.get('/api/post', function (req, res) {

        var Post = mongoose.model('Post');

        Post.find(function (err, docs) {

            if (err) {
                res.sendStatus(400);
            } else {
                res.send(docs);
            }

        });

    });
    //Post  API POST route
    app.post('/api/post', function (req, res) {

        var Post = mongoose.model('Post');
        var postData = req.body;
        var post = new Post(postData);

        post.save(function (err) {

            if (err) {
                res.sendStatus(400);
            } else {
                res.send(post);
            }

        });

    });
    //Inquiry  API GET route
    app.get('/api/inquiries', function (req, res) {

        var Inquiry = mongoose.model('Inquiry');

        Inquiry.find(function (err, docs) {

            if (err) {
                res.sendStatus(400);
            } else {
                res.send(docs);
            }

        });

    });
    //Inquiry  API POST route
    app.post('/api/inquiries', function (req, res) {

        var Inquiry = mongoose.model('Inquiry');
        var inquiryData = req.body;
        var inquiry = new Inquiry(inquiryData);

        post.save(function (err) {

            if (err) {
                res.sendStatus(400);
            } else {
                res.send(post);
            }

        });

    });

};


function myAuth(req, res, next) {

    if (req.query.token === token) {

        console.log('Next');

        next();

    } else {

        res.sendStatus(401);

    }

}

function sendMail(subject, html, cb) {

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://vdrepar@gmail.com:mojegeslo@smtp.gmail.com');

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Vid', // sender address
        to: 'aaviador.io@gmail.com', // list of receivers
        subject: subject, // Subject line
        text: '', // plaintext body
        html: html // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        if (cb) {
            cb();
        }
        console.log('Message sent: ' + info.response);

    });

}















