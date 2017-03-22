var server      = require('./server/server');
var database    = require('./server/database');
var resources   = require('./server/resources');

function init(){

  database.connect(function(){

    resources.initModels();

    server.start();

    require('./server/models/post');
    require('./server/models/file');

  });

}

init();
