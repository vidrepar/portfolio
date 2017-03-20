angular.module('cms').controller('HomepageCtrl',function($scope, homepageService){

    $scope.homepageData = homepageService.model.data[0];
    var original = angular.copy($scope.homepageData);

    $scope.$watch('homepageData', function (o) {
        $scope.isOriginal = function () {
            return angular.equals(o,original);
        };
    }, true);

    $scope.save = function () {

        if ( $scope.homepageData._id ) {
            homepageService.updateData($scope.homepageData._id, $scope.homepageData);
            original = angular.copy($scope.homepageData);
        } else {
            homepageService.postData($scope.homepageData);
            $state.reload();
        }

    };

    $scope.cancel = function () {
        $scope.homepageData = angular.copy(original);
    };


});
