angular.module('cms').controller('SidebarCtrl',function($scope, $state){

	$scope.menuItems = [

		{
			name:'Projects',
			state:'app.projects'
		},
		{
			name:'About',
			state:'app.about'
		}

	];

});
