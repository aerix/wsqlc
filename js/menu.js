'use strict';

function menu($scope)
{
    $scope.options = new Object();
    $scope.options.show = false;
    $scope.options.swing = function()
    {
        $scope.options.show = !$scope.options.show;
	};
}
