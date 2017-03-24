angular.module('cms').factory('authService',function($http, $rootScope, $localForage, $q) {

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

            var promise = $http.post('/api/login', user);

                promise.then(function (res) {

                    $rootScope.token = res.data.token;

                    return $localForage.setItem('token', res.data.token)
                        .then(function () {
                            if ( cb ) {
                                cb(res);
                            }
                        });

                });

                return promise;

        },
        loginStatus:function () {

            return new Promise(function (resolve, reject) {

                if (!$rootScope.token) {

                    $localForage.getItem('token')
                        .then(function (token) {

                            console.log(token);

                            if (token) {

                                $rootScope.token = token;

                                $http.get('/api/login-status')
                                    .then(function (res) {

                                        resolve(res.data);

                                    });
                            } else {
                                reject('No token');
                            }

                        });

                } else {

                    $http.get('/api/login-status')
                        .then(function (res) {

                            resolve(res.data);

                        });

                }

            });

        }

    };

    return auth;

});
