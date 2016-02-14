angular.module('cms').factory('ProjectService',function($http) {

	var project = {
        apiUrl:'http://localhost:3000',
		model:{
			list : [],  //this is a list of ALL projects from the DB
            item : null
		},

        createProject:function(data){

            var promise = $http.post(project.apiUrl+'/api/project', data);
            promise.success(function(res){
                project.model.list.push(res);
            });
            return promise;

        },

        getProjects:function(){

            var promise = $http.get(project.apiUrl+'/api/project');
            promise.success(function(res){
                project.model.list = res;
            });
            return promise;

        },
        deleteProject:function(id){

            var promise = $http.delete(project.apiUrl+'/api/project/'+id);
            promise.success(function(res){
                console.log('Delete status: ',res);
                angular.forEach(project.model.list, function(_project, i){
                    if(projectId === _project._id){
                        project.model.list.splice(i,1);
                    }
                });

            });

            return promise;

        },


        updateProject:function(projectId, projectData){

            var promise = $http.put(project.apiUrl+'/api/project/'+projectId, projectData);

            promise.success(function(projectResponse){

                angular.extend(projectData, projectResponse);

            });

            return promise;

        }
	};

	return project;
});


