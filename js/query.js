'use strict';

/**
 * Query controller.
 */
function query($scope, $http)
{    
    $scope.request = new Object();
    $scope.request.server = "localhost";
    $scope.request.user = "root";
    // $scope.request.password = "";
    // $scope.database = "";
    $scope.request.sql = "";

    $scope.executing = false; // Request is now executing?
    $scope.error = new Object();

	$scope.options = new Object();
	$scope.options.show = false;
	$scope.options.swing = function()
	{
		$scope.options.show = !$scope.options.show;
	};
	

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
