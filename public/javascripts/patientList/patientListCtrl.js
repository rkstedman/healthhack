angular.module("patientList", [])
  .controller("PatientListCtrl", ['$scope', '$location', '$http',
  function($s, $location, http) {
  	function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) == variable) {
              return decodeURIComponent(pair[1]);
          }
      }
    }

    $s.nameFilter = function(e) {
      var searchFilter = getQueryVariable('srchTerm');
      if (typeof searchFilter == 'undefined' || 
        searchFilter == 'undefined') return true;

      function checkMatch(name, substr) {
        return name.toLowerCase().indexOf(substr.toLowerCase()) > -1;
      }

      return checkMatch(e.firstName, searchFilter) ||
        checkMatch(e.lastName, searchFilter);
    };

    http({method: 'GET', url: '/patients'}).success(function(e) {
      $s.patientData = e;
    });
  }]);