angular.module("geKnowApp")
  .controller("PatientListCtrl", ['$scope', '$location', 'Patient',
  function($s, $location, Patient) {
    var searchStr = $location.search().searchStr;
    
    $s.nameFilter = function(e) {
      if (angular.isUndefined(searchStr)) return true;

      function checkMatch(name, substr) {
        return name.toLowerCase().indexOf(substr.toLowerCase()) > -1;
      }

      return checkMatch(e.firstName, searchStr) ||
        checkMatch(e.lastName, searchStr);
    };
    
    $s.patientData = Patient.query();
  }])
  .controller("PatientViewCtrl", ['$scope', '$location', 'Patient', 'PatientFactory',
  function($s, $location, Patient, PatientFactory) {
    $s.ethnicityOpts = ['African American', 'Caucasian', 'Ashkenazi Jewish', 'Other'];    

    var uid = $location.search().id;
    Patient.get({id: uid}, function(patient) {
      $s.patient = PatientFactory.create(patient);
    });
  }])
  .controller("MainCtrl", ['$scope', '$location',
  function($s, $location) {
    $s.searchPatient = function(str) {
      $location.path('/').search({searchStr: str});
    };
  }]);
