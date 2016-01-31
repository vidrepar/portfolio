var mongoose = require('mongoose');
var token = '2309dfhdsf0lkasdASDasd821lk';


module.exports = function(app){

      // API Login routes
    app.post('/api/login', function(req, res){

		var username = 'franci';
		var password = 'mypassword';

		if(req.body.username === username && req.body.password === password){
			// UNSERCURE authentication successful
			res.send({token:token});
		}else{
			res.sendStatus(401);
		}

    });

      // API Files routes
    APP.get('/api/files', function(req, res){

        var File = mongoose.model('File');

        File.find(function(err, docs){

            if(err){
                res.sendStatus(400);
            }else{

                res.send(docs);

            }

        });

    });

    APP.post('/api/file', function(req, res){

        var data = req.body;

        console.log(data);

        var File = mongoose.model('File');

        var file = new File(data);

        file.save(function(err){

            if(!err) {
                res.sendStatus(200);
            }else{
                res.sendStatus(400);
            }

        });

    });

  // Landing page route
  app.get('/', function(req, res){

      res.render('index', { title:'Welcome', jsSrc:'js/index.js' });

  });


  // Project routes
    app.get('/projects', function(req, res){

        var Project = mongoose.model('Project');

        Project.find(function(err, docs){

            res.render('projects/index', {
              title:'Work',
              projects:docs,
              jsSrc:'js/project.js'

          });

        });

    });

    // API Project routes
	app.get('/api/project', function(req, res){

		var Project = mongoose.model('Project');

		Project.find(function(err, docs){

			console.log(docs);
			console.log(err);

			if(!err){
				res.send(docs);
			}

		});

	});

  //Project API POST route
	app.post('/api/project', function(req, res){

		var Project = mongoose.model('Project');

        console.log(req.body);

		var project = new Project(req.body);

		project.save(function(err){

			if(!err){
				res.send(project);
			}else{
				res.sendStatus(400);
			}

		});

	});

  //Project API DELETE route
	app.delete('/api/project/:id', function(req, res){

		var Project = mongoose.model('Project');

		Project.findByIdAndRemove(req.params.id, function(err, doc){

			if(!err){
				res.sendStatus(200);
			}else{
				res.sendStatus(400);
			}

		});

	});

  //Project API PUT route
	app.put('/api/project/:id', function(req, res){

		var Project = mongoose.model('Project');

		Project.findByIdAndUpdate(req.params.id, req.body,{new: true}, function(err, doc){

			if(!err){
				res.send(doc);
			}else{
				res.sendStatus(400);
			}

		});

	});

  // About GET route
  app.get('/about', function(req, res){

      res.render('about/index', { title:'About Me', jsSrc:'js/about.js' });

  });

  // Contact GET route
  app.get('/contact', function(req, res){

    var Project = mongoose.model('Project');

    Project.find(function(err, docs){

      res.render('contact/index', { title:'Contact', jsSrc:'js/contact.js' });

    });

  });

    // API GET Post route
    app.get('/api/post', function(req, res){

        var Post = mongoose.model('Post');

        Post.find(function(err, docs){

            if(err){
                res.sendStatus(400);
            }else{
                res.send(docs);
            }

        });

    });

    app.post('/api/post', function(req, res){

        var Post        = mongoose.model('Post');
        var postData    = req.body;
        var post        = new Post(postData);

        post.save(function(err){

            if(err){
                res.sendStatus(400);
            }else{
                res.send(post);
            }

        });

    });

};

function myAuth(req, res, next){

	if(req.query.token === token){

			console.log('Next');

			next();

		}else{

			res.sendStatus(401);

		}

}















