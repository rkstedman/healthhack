angular.module("patientView", [])
  .controller("PatientViewCtrl", ['$scope', '$location', '$http',
  function($s, $location, http) {
    http({method: 'GET', url: $location.path()}).success(function(e) {
      $s.patientData = e;
    });
  }]);