angular.module('cms')
.controller('ModalProjectCtrl',function($scope, Upload, $modalInstance, ProjectService, project){

    var newProject = false;

    if(project === null){

        $scope.type = 'New';
        newProject = true;
        $scope.project = {};

    }else{
        $scope.type = 'Edit';
        var resetProject = angular.copy(project);
        $scope.project = project;
    }

	$scope.ok = function(){

		$scope.project.dateTime = Date.now();

        if(newProject){
            ProjectService.createProject($scope.project);
        }else{
            ProjectService.updateProject($scope.project._id,$scope.project);
        }

		$modalInstance.close();

	};

	$scope.cancel = function(){

		angular.extend($scope.project, resetProject);
		$modalInstance.close();

	};

    $scope.upload = function(file){

        Upload.upload({
            url: '/api/upload',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });

    };

});












