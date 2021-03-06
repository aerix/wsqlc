'use strict';

var app = angular.module('wsqlc', ['ngRoute', 'ngCookies', 'ngMaterial', 'menu', 'query', 'wsqlc-settings', 'wsqlc-login']);
          
app.config(function($mdThemingProvider, $mdIconProvider){

  $mdIconProvider
	  .defaultIconSet("./assets/svg/icons.svg", 128)
	  .icon("menu", "./assets/svg/menu.svg", 24)	  
	  .icon("popup", "./assets/svg/popup.svg", 24);

	  $mdThemingProvider.theme('default')
		  .primaryPalette('blue-grey')
		  .accentPalette('amber');
});

var checkRouting = function ($q, $location, $cookieStore)
{
    if ($cookieStore.get("credentials") != undefined && $cookieStore.get("credentials").version == 1)
    {
        return true;
    }
    else
    {
        var defered = $q.defer();
        // defered.resolve(true);
        defered.reject();
        $location.path("/login");
        return defered.promise;;
    }
};


app.config
(
    [
        '$routeProvider',
        function ($routeProvider)
        {
			$routeProvider.when('/login', {templateUrl: "login.html", controller: "loginController"});
            $routeProvider.when('/query', {templateUrl: "query.html", controller: "queryController", resolve: { factory: checkRouting }});           
            $routeProvider.when('/about', {templateUrl: "about.html"});
			$routeProvider.when('/settings', {templateUrl: "settings.html"});
			$routeProvider.when('/documentation', {templateUrl: "documentation.html"});
            $routeProvider.otherwise({templateUrl: "query.html", controller: "queryController", resolve: { factory: checkRouting }});
        }
    ]
);
			  
app.config
(
	[
		'$httpProvider',
		function ($httpProvider)
		{
			// Intercept POST requests, convert to standard form encoding.
			$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
			$httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) 
			{
				var key;
				var result = [];
				for (key in data) 
				{
					if (data.hasOwnProperty(key)) 
					{
						result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
					}
				}                             
				return result.join("&");
			});
		}
	]
);
