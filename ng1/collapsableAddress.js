angular.module('app').directive(
  'collapsableAddress', // no dashes!?! 
  function() {
  return {
    retstrict: 'E',
    scope: {
      address: '='
    },
    templateUrl: 'collapsable-address.html',
    controller: function($scope) {
      $scope.isCollapsed = false;
      
      $scope.expandAddress = function() {
        $scope.isCollapsed = false;
      }
      $scope.collapseAddress = function() {
        $scope.isCollapsed = true;
      }
    }
  }
})