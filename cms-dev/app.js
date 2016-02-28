angular.module('cms', [
    'ui.bootstrap',
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'ngFileUpload',
    'ui.tinymce'
]);

angular.module('cms').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html',
        resolve:{
            projects:function(projectService){
                return projectService.getList();
            }
        }
    });
    $stateProvider.state('project', {
        url: '/project/:id',
        templateUrl: 'partial/project/project.html',
        resolve: {

            project: function ($stateParams, $location, projectService) {

                var id = $stateParams.id;

                if (id.length > 0) {
                    return projectService.getOne(id);
                } else {

                    return true;
                }

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
