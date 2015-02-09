'use strict';

/**
 * Login controller.
 */
function login($scope)
{
    $scope.login = "";
    $scope.password = "";
    
    $scope.ok = function()
    {
        location.href = "#query";
    };
}
