'use strict';

function menu($scope, $http)
{
    $scope.options = new Object();
    $scope.options.show = false;
    $scope.options.swing = function()
    {
        $scope.options.show = !$scope.options.show;
	};

    $http.get("menu.json", {user:""}).success
    (
        function(response)
        {
            $scope.points = response;
        }
    ).
    error
    (
        function(message, status)
        {
            alert("Error: " + message);
        }
    );
}
