angular.module('cms')
    .controller('HeaderCtrl',function($scope){

})
    .directive('sToggle', function ($window, $compile) {
    return {
        restrict: 'E',
        template:'<a class="sidebar-toggle" ng-click="toggleSidebar()" data-toggle="offcanvas" role="button">',
        replace: true,
        scope: {
        },
        link: function (scope, el, attr) {

            scope.bWidth = $window.innerWidth;

            $(window).resize(function() {
                scope.bWidth = $window.innerWidth;
                scope.isOpened = scope.bWidth > 768;
                scope.$apply();
            });

            scope.toggleSidebar = function () {
                if (scope.isOpened) {
                    if (scope.bWidth > 768) {
                        el.closest('body').removeClass('sidebar-collapse').addClass('sidebar-open');
                        scope.isOpened = false;
                    } else {
                        el.closest('body').addClass('sidebar-collapse').removeClass('sidebar-open');
                        scope.isOpened = false;
                    }
                } else {
                    if (scope.bWidth > 768) {
                        el.closest('body').addClass('sidebar-collapse').removeClass('sidebar-open');
                        scope.isOpened = true;
                    } else {
                        el.closest('body').removeClass('sidebar-collapse').addClass('sidebar-open');
                        scope.isOpened = true;
                    }
                }
            };

        }
    };
})

;
