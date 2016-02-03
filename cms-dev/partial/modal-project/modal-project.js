angular.module('cms')
.controller('ModalProjectCtrl',function($scope, $modalInstance, ProjectService, project){

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

});












