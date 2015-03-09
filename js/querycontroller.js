angular.module('query', [ 'ngCookies' ]).
controller
(
	'queryController',
	function($scope, $http, $cookieStore)
	{    
		$scope.request = new Object();
		$scope.request = $cookieStore.get("credentials");
		$scope.request.sql = ""; // Add property.

		$scope.executing = false; // Request is now executing?
		$scope.error = new Object();

		/** Execute query. */
		$scope.execute = function()
		{
			// Prepare.
			$scope.executing = true;
			delete($scope.response); // Clear previous successful result (if it was).
			$scope.error.show = false;

			// Send.
			$http.post("db/", $scope.request)
			.success
			(
				function(response)
				{
					$scope.response = new Object();

					// Names of table columns. From first result row.
					$scope.response.header = Object.keys(response[0]);

					// Table cells.
					$scope.response.data = response;

					$scope.executing = false;
				}
			)
			.error
			(
				function (message, status)
				{
					$scope.executing = false;
					$scope.error.show = true;
					$scope.error.message = message;    
					console.log(status, message);
				}
			);    
		};
	}
);
