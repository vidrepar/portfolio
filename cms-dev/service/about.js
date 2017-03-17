angular.module('cms').factory('aboutService',function($http) {

    var about = {

        model:{
            data:{}
        },
        getData:function(cb){

            return $http.get('/api/about')
                .then(function(res){

                    var data = res.data;
                    about.model.data = data;

                    if(cb){
                        cb(data);
                    }

                });
        },
        postData:function(data, cb){

            $http.post('/api/about', data)
                .then(function(res){

                    if(cb){
                        cb(res.data);
                    }

                });

        },
        updateData:function(id, data, cb){

            return $http.put('/api/about/'+id, data)
                .then(function(res){

                    about.model.item = res.data;

                    if(cb){
                        cb(res.data);
                    }

                });

        }

    };

    return about;
});
