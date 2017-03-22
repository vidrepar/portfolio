var mongoose = require('mongoose');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './assets/images'});
var nodemailer = require('nodemailer');
var gm = require('gm');

var siteRouter = require('./site-router');
var resources = require('./resources');

module.exports = function (app) {

    siteRouter(app);
    resources.initRouters(app);


    //File Upload
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

    //Files
    app.get('/api/files', function (req, res) {

        var File = mongoose.model('File');

        File.find(function (err, docs) {

            if (err) {
                res.sendStatus(400);
            } else {

                res.send(docs);

            }

        });

    });

    app.post('/api/file', function (req, res) {

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

};

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















