angular.module('cms').controller('ProjectCtrl',function($scope, projectService, Upload){

    $scope.sections = [
        {
            title:''
        }
    ];

    $scope.options = {};

    $scope.addSectionButton = function(){

        $scope.sections.push({title:''});

    };

    $scope.selectFile = function(file){

        $scope.options.selectedFile = file;

    };

    $scope.upload = function(file){

        $scope.options.fileName = file.name;

        Upload.upload({
            url: '/api/upload',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            $scope.options.fileUploaded = file;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);

            $scope.options.progressPercentage = progressPercentage;

        });

    };

    $scope.addSections = function(file, section){

        Upload.upload({
            url:'/api/upload',
            data:{file:file}
        }).then(function(resp){

            section.image = resp.data;
            console.log(resp.data);

        });

    };

    $scope.save = function(){

        $scope.model.sections = $scope.sections;
        projectService.create($scope.model);

    };

});
