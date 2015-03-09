angular.module('wsqlc-login', ['ngCookies']).
controller
(
	'loginController',
	function($scope, $location, $cookieStore)
	{
	
		$scope.credentials = $cookieStore.get("credentials");

		if ($scope.credentials == undefined)
		{
			$scope.credentials = new credentials();
		}
		else
		{
			$scope.credentials.password = ""; // Clear.
		}
		
		$scope.enter = function()
		{
			$cookieStore.put("credentials", $scope.credentials);
            $location.path("/query");
		};
	}
);
