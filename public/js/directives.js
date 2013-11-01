'use strict'
angular.module('geKnowApp')
  .directive('gkConsentForm', function() {
    return {
      restrict: 'E',
      scope: {
        readOnly: "=readOnly"
      },
      templateUrl: 'views/partials/consentForm'
    }
  });
