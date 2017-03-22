angular.module('cms').factory('authService',function($http, $rootScope) {

    var auth = {

        model:{
            user:null
        },
        registerUser:function (user, cb) {

            $http.post('/api/register', user)
                .then(function (res) {
                    if ( cb ) {
                        cb(res);
                    }
                });

        },
        loginUser:function (user, cb) {

            $http.post('/api/login', user)
                .then(function (res) {

                    console.log(res.data);
                    $rootScope.token = res.data.token;

                    if ( cb ) {
                        cb(res);
                    }

                });

        }

    };

    return auth;

});
