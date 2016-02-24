angular.module('cms').factory('projectService',function($http) {

	var project = {

        model:{
            list:[],
            item:null
        },
        getList:function(cb){

            return $http.get('/api/projects')
                .then(function(res){

                    var list = res.data;
                    project.model.list = list;
                    console.log(list);

                    if(cb){
                        cb(list);
                    }

                });
        },
        create:function(data){

            $http.post('/api/project', data)
                .then(function(res){

                    console.log(res);

                });

        },
        remove:function(id, cb){

            $http.delete('/api/project/'+id)
                .then(function(res){

                if(cb){
                    cb(res);
                }

            });

        }
    };

	return project;
});
