module.exports = function(app) {
  var PatientController = app.controllers.PatientController;

  app.get('/', function(req, res){
    res.redirect('/patients');
  });
  
  app.get('/about', function(req, res){
    res.render('about', {page : 'about'});
  });
  
  /* Patients */
  // show maps to clinician view or patient view based on flag
  app.get('/patients/:id', PatientController.show);
  // displays a table view of patients
  app.get('/patients', PatientController.list);
  
  // creates a new patient
  app.post('/patients', PatientController.create);
  // update a patient
  app.put('/patients/:id', PatientController.update);
  // delete a patient
  app.delete('/patients/:id', PatientController.remove);
  
}
