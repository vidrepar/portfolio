angular.module('cms')
.controller('ModalProjectCtrl',function($scope, $http, Upload, $modalInstance, ProjectService, project){

    $scope.options = {};
    $scope.project = {
      images : []
    };

    $scope.selectFile = function(file){

        $scope.options.selectedFile = file;

    };

    $scope.upload = function(file){

        $scope.options.fileName = file.name;

        Upload.upload({
            url: '/api/upload',
            data: {file: file}
        }).then(function (res) {

            //on upload complete
            console.log(res);
            $scope.options.fileUploaded = file;
            $scope.project.imageUrl = res.data;

        }, function (resp) {
            console.log('Error status: ' + res.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $scope.options.progressPercentage = progressPercentage;

        });

    };

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












