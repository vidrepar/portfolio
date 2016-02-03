var server      = require('./server/server');
var database    = require('./server/database');

//initialization file

function init(){

  database.connect(function(){

    server.start();

    require('./server/models/project');
    require('./server/models/post');
    require('./server/models/file');
    require('./server/models/inquiry');

  });

}

init();
