angular.module("geKnowApp")
  .controller("PatientListCtrl", ['$scope', '$location', 'Patient',
  function($s, $location, Patient) {
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
    
    $s.patientData = Patient.query();
  }])
  .controller("PatientViewCtrl", ['$scope', '$location', 'Patient', '$filter',
  function($s, $location, Patient, $filter) {
    $s.yearOpts = [];

    for (var i = 1900; i < 2000; i++) $s.yearOpts.push(i);

    $s.ethnicityOpts = ['African American', 'Caucasian', 'Ashkenazi Jewish', 'Other'];    

    var uid = $location.search().id;
    Patient.get({id: uid}, function(patient) {
      $s.patient = patient;
      $s.yearOfBirth = parseInt($filter('date')(patient.profile.birthdate, 'yyyy'));
    });
  }]);
