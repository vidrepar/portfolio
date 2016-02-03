angular.module('cms').factory('PostsService', function($http) {

	var posts = {
        apiUrl:'http://localhost:3000',
        model:{
            list:[],
            item:{}
        },
        getPosts:function(){

            var promise = $http.get(posts.apiUrl+'/api/post');

            promise.success(function(res){

                posts.model.list = res;

            });

            return promise;

        },
        createPost:function(postData){

            var promise = $http.post(posts.apiUrl+'/api/post', postData);

            promise.success(function(res){

                posts.model.list.push(res);

            });

            return promise;

        },
        removeItem:function(_id){

            angular.forEach(posts.model.list, function(post, index){

                if(post.id === _id){
                    posts.model.list.splice(index,1);
                }

            });

        }
    };

	return posts;
});
