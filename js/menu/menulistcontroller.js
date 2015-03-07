  angular
       .module('menu')
       .controller('MenuListController', [
          'menuService', '$mdSidenav', '$mdBottomSheet', '$log', '$location',
          MenuListController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param iconService
   * @constructor
   */
  function MenuListController( menuService, $mdSidenav, $mdBottomSheet, $log, $location ) 
  {

  
    var self = this;

    self.selected     = null;
    self.menu        = [ ];
    self.selectMenu   = selectMenu;
    self.toggleList   = toggleList;    

    // Load all menu items
    menuService
          .loadAll()
          .then
		  ( 
			function(menu) 
			{
                self.menu    = [].concat(menu);
			    self.selected = menu[0];
			    for (var i = 0, len = menu.length; i < len; i++) 
			    {
				    if (menu[i].id ==  $location.$$path) 
				    {
					    self.selected = menu[i];
				    }
			    }            
            }
		  );

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleList() 
	{
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current icons
     * @param menuId
     */
    function selectMenu ( menu ) 
	{
      self.selected = angular.isNumber(menu) ? $scope.menu[menu] : menu;
      self.toggleList();
      $location.path(menu.id);
    }   
  }
