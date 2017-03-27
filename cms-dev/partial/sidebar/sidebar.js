angular.module('cms')
    .controller('SidebarCtrl',function($scope, $state){

	$scope.menuItems = [

		{
			name:'Projects',
			state:'app.projects'
		},
		{
			name:'Homepage',
			state:'app.homepage'
		},
        {
            name:'About',
            state:'app.about'
        }

	];

});
