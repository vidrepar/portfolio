angular.module('cms').controller('ModalPostCtrl',function($scope, post, $modalInstance, PostsService){

    if(post !== null){
        $scope.post = post;
    }else{
        $scope.post = {};
    }

    $scope.ok = function(){

        console.log($scope.post);

        PostsService.createPost($scope.post);
        $modalInstance.close();

    };

    $scope.cancel = function(){

        $modalInstance.close();

    };

});
