angular.module("patientList", [])
  .controller("PatientListCtrl", ['$scope', '$http',
  function($s, http) {
    http({method: 'GET', url: '/patients'}).success(function(e) {
      $s.patientData = e;
    });
  }]);