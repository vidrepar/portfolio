angular.module('cms').controller('AboutCtrl',function($scope, aboutService, $state){

    $scope.aboutData = aboutService.model.data[0];
    var original = angular.copy($scope.aboutData);

    $scope.addAbility = function (col) {
        $scope.aboutData.stack[col].abilities.push('');
    };

    $scope.$watch('aboutData', function (o) {
        $scope.isOriginal = function () {
            return angular.equals(o,original);
        };
    }, true);

    $scope.save = function () {

        $scope.aboutData.stack.map(function (c) {
            c.abilities.map(function (a,i) {
                if ( a === '' ) { c.abilities.splice(i) }
            });
        });

        if ( $scope.aboutData._id ) {
            aboutService.updateData($scope.aboutData._id, $scope.aboutData);
            original = angular.copy($scope.aboutData);
        } else {
            aboutService.postData($scope.aboutData);
            $state.reload();
        }

    };

    $scope.cancel = function () {
        $scope.aboutData = angular.copy(original);
    };

});
