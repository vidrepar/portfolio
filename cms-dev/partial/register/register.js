angular.module('cms').controller('RegisterCtrl',function($scope, $state, authService){

    $scope.user = {};

    $scope.register = function () {

        if ( validateEmail($scope.user.email) ) {

            authService.registerUser($scope.user, function () {
                $state.go('login');
            });

        } else {
            console.log('Your email is not correctly formatted');
        }

    };

    // Validate email
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

});
