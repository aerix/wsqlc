angular.module('wsqlc-settings', ['ngMaterial'])
.controller
(
	'settingsController', 
	function($scope)
	{
		$scope.data = {};
		$scope.data.cb1 = true;
		$scope.data.cb2 = false;
		$scope.data.cb3 = false;
		$scope.data.cb4 = false;
		$scope.data.cb5 = false;
		
		$scope.data.group1 = 'Banana';
		
		$scope.toppings = 
		[
			{ category: 'meat', name: 'Pepperoni' },
			{ category: 'meat', name: 'Sausage' },
			{ category: 'meat', name: 'Ground Beef' },
			{ category: 'meat', name: 'Bacon' },
			{ category: 'veg', name: 'Mushrooms' },
			{ category: 'veg', name: 'Onion' },
			{ category: 'veg', name: 'Green Pepper' },
			{ category: 'veg', name: 'Green Olives' }
	    ];
		
		$scope.color = 
		{
			red: Math.floor(Math.random() * 255),
			green: Math.floor(Math.random() * 255),
			blue: Math.floor(Math.random() * 255)
		};
	}
);