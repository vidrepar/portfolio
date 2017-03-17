angular.module('cms', [
    'ui.bootstrap',
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'ngFileUpload',
    'ui.tinymce'
]);

angular.module('cms').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {

        url:'/',
        abstract:true,
        views:{
            sidebar:{
                templateUrl:'partial/sidebar/sidebar.html',
                controller:'SidebarCtrl'
            },
            'main-header':{
                templateUrl:'partial/header/header.html',
                controller:'HeaderCtrl'
            }
        }

    });

    $stateProvider.state('app.projects', {
        url: 'projects',
        views:{
            'main@':{
                resolve:{
                    projects:function(projectService){
                        return projectService.getList();
                    }
                },
                templateUrl: 'partial/projects/projects.html',
                controller: 'ProjectsCtrl'
            }
        }
    });
    $stateProvider.state('app.project', {
        url: 'project/:id',
        views:{
            'main@':{
                resolve: {

                    project: function ($stateParams, $location, projectService) {

                        var id = $stateParams.id;

                        if (id.length > 0) {
                            return projectService.getOne(id);
                        } else {

                            return true;
                        }

                    }
                },
                templateUrl: 'partial/project/project.html',
                controller: 'ProjectCtrl'
            }
        }

    });
    $stateProvider.state('app.about', {
        url: 'about',
        templateUrl: 'partial/about/about.html',
        views:{
            'main@':{
                resolve: {
                    aboutData: function (aboutService) {
                        return aboutService.getData();
                    }
                },
                templateUrl: 'partial/about/about.html',
                controller: 'AboutCtrl'
            }
        }
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
