/* globals alert */

angular.module('cms').controller('ProjectCtrl',function(
    $scope,
    $stateParams,
    $state,
    projectService,
    Upload){


    $scope.sections = [
        {
            title:''
        }
    ];
    $scope.options = {};
    $scope.model = {
        coverImage : null,
        images : []
    };

    $scope.isEdit = false;

    var id = $stateParams.id;

    if(id.length > 0) {

        $scope.model = projectService.model.item;
        $scope.isEdit = true;

    }

    console.log('$scope.model', $scope.model);
    console.log('$scope.sections', $scope.sections);
    console.log('$scope.model.sections', $scope.model.sections);

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
        }).then(function(resp) {

            section.image = resp.data;
            console.log(resp.data);

        }, function(){

        }, function(){

        });

    };

    $scope.save = function(){

        $scope.model.sections = $scope.sections;

        if(!$scope.isEdit) {

            projectService.create($scope.model, function(data){
                $state.go('projects');
            });

        }else{

            projectService.update($scope.model._id, $scope.model, function(data){
                $state.go('projects');
            });

        }

    };

    $scope.cancel = function(){
        $state.go('projects');
    };

    $scope.delete = function(id){

        var c = confirm('Are you sure?');

        if(c) {
            console.log(
                'id: ', id,
                '$scope.model: ', $scope.model._id,
                'projectService.model.list: ', projectService.model.list,
                'projectService.model.item: ', projectService.model.item
            );

            projectService.remove($scope.model._id, function(data){
                $state.go('projects');
            });

        }

    };

});
