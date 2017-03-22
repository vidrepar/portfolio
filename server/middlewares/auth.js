module.exports = function (req, res, next) {

    console.log('Token:', req.headers['Authorization']);

};