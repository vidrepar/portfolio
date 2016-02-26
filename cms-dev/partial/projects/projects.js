/* globals confirm */

angular.module('cms').controller('ProjectsCtrl',function($scope, $state, projectService){

    $scope.list = projectService.model.list;

    $scope.options = {
        orderFilter:'-date'
    };

    $scope.toggleDateOrder = function(){

        if($scope.options.orderFilter === '-date'){
            $scope.options.orderFilter = 'date';
        }else{
            $scope.options.orderFilter = '-date';
        }

        console.log('something', $scope.list);

    };

    $scope.createProject = function(){

        $state.go('project');

    };

    $scope.deleteProject = function(id){

        console.log(id);

        var c = confirm('Are you sure?');

        if(c) {
            projectService.remove(id, function () {

                angular.forEach($scope.list, function (project, index) {

                    if (project._id === id) {
                        $scope.list.splice(index, 1);
                    }

                });

            });
        }

    };

});
