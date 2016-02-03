angular.module('cms').factory('ProjectService',function($http) {

	var project = {
        apiUrl:'http://localhost:3000',
		model:{
			list : [],
            item : null
		},
        getProjects:function(){

            var promise = $http.get(project.apiUrl+'/api/project');

            promise.success(function(res){

                project.model.list = res;

            });

            return promise;

        },
        deleteProject:function(projectId){

            var promise = $http.delete(project.apiUrl+'/api/project/'+projectId);

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
        createProject:function(projectData){

            var promise = $http.post(project.apiUrl+'/api/project', projectData);

            promise.success(function(projectResponse){

                project.model.list.push(projectResponse);

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


