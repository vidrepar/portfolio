angular.module('cms',
    [
    'ui.bootstrap',
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'as.sortable'
    ]);

angular.module('cms').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html',
        controller:'ProjectsCtrl',
        resolve:{
            projects:function(ProjectService){

                return ProjectService.getProjects();

            }
        }
    });
    $stateProvider.state('posts', {
        url: '/posts',
        templateUrl: 'partial/posts/posts.html',
        controller:'PostsCtrl',
        resolve:{
            posts:function(PostsService){

                return PostsService.getPosts();

            }
        }
    });
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'partial/about/about.html'
    });
    $stateProvider.state('inquiries', {
        url: '/inquiries',
        templateUrl: 'partial/inquiries/inquiries.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/projects');

});

angular.module('cms').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
