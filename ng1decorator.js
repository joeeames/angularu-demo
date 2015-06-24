angular.module('app').directive('focusOn', function() {
  return {
    restrict: 'A',
    link: function FocusOn(scope, element, attrs) {
      var el = element[0];

      scope.$watch('setfocus', function onChange() {
        if(scope[attrs.focusOn]) {
          el.focus();
        }
      });

      

    }
  }
})