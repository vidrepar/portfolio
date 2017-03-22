exports.initRouters = function (app) {

    require('./user/router').init(app);
    require('./about/router').init(app);
    require('./homepage/router').init(app);
    require('./project/router').init(app);

};

exports.initModels = function () {

    require('./user/model');
    require('./about/model');
    require('./homepage/model');
    require('./project/model');

};