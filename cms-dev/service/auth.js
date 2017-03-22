angular.module('cms').factory('authService',function($http) {

    return auth = {

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

        }

    };

});
