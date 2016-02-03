angular.module('cms').controller('PostsCtrl',function($scope, PostsService, $modal){

    $scope.posts = PostsService.model.list;

    $scope.removePost = function(id){

        PostsService.removeItem(id);

    };

    $scope.createNew = function(){

        var modal = $modal.open({
           templateUrl:'partial/modal-post/modal-post.html',
            controller:'ModalPostCtrl',
            size:'lg',
            resolve:{
                post:function(){
                    return null;
                }
            }
        });

    };

});
