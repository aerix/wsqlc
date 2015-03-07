(function(){
  'use strict';

  angular.module('menu')
         .service('menuService', ['$q', MenuDataservice]);

  /**
   * MenuDataService
   * Menu items embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function MenuDataservice($q){
    var menu = [
      {
	    id: '/query',
        name: 'Query',
        icon: 'svg-1'
      },
      {
		id: '/settings',
        name: 'Settings',
        icon: 'svg-2'        
      },
      {
	    id: '/documentation',
        name: 'Documentation',
        icon: 'svg-3'        
      },
      {
	    id: '/about',
        name: 'About',
        icon: 'svg-4'        
      },
      {
	    id: '/login',
        name: 'LogIn',
        icon: 'svg-5'        
      }      
    ];

    // Promise-based API
    return {
      loadAll : function() {
        // Simulate async nature of real remote calls
        return $q.when(menu);
      }
    };
  }

})();
