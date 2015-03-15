angular.module('wsqlc.login.controller', ['ngCookies']).
	controller
(
	'loginController',
	function($scope, $cookieStore, $mdDialog)
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

		$scope.enter = function(ev)
		{
			if ($scope.credentials.user != undefined)
			{
				$cookieStore.put("credentials", $scope.credentials);
				location.href = "../";
			}
			else
			{
				$mdDialog.show(
					$mdDialog.alert()
					.title('Validation')
					.content('User name is required')
					.ariaLabel('Login')
					.ok('Got it!')
					.targetEvent(ev)
				);
			}
		};
	}
);
