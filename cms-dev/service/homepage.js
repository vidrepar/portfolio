angular.module('cms').factory('homepageService',function($http) {

    var homepage = {
        model:{
            data:{}
        },
        getData:function(cb){

            return $http.get('/api/homepage')
                .then(function(res){

                    var data = res.data;
                    homepage.model.data = data;

                    if(cb){
                        cb(data);
                    }

                });
        },
        postData:function(data, cb){

            $http.post('/api/homepage', data)
                .then(function(res){

                    if(cb){
                        cb(res.data);
                    }

                });

        },
        updateData:function(id, data, cb){

            return $http.put('/api/homepage/'+id, data)
                .then(function(res){

                    homepage.model.item = res.data;

                    if(cb){
                        cb(res.data);
                    }

                });

        }
    };

    return homepage;
});
