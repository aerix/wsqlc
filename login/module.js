'use strict';

var app = angular.module("wsqlc.login", ["ngCookies", "ngMaterial", "wsqlc.login.controller"]);

app.config
(
	function($mdThemingProvider, $mdIconProvider)
	{
		$mdThemingProvider.theme('default')
			.primaryPalette('blue-grey')
			.accentPalette('amber');
	}
);
