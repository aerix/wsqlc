'use strict';

var app = angular.module('sqlConsole', []);

app.config
(
    [
        '$routeProvider',
        function ($routeProvider)
        {
            $routeProvider.when('/query', {templateUrl: "query.html"});
            $routeProvider.when('/login', {templateUrl: "login.html"});
            $routeProvider.otherwise({templateUrl: "query.html"});
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
