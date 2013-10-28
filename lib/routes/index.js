module.exports = function(app) {
  var PatientController = app.controllers.PatientController;

  app.get('/', function(req, res){
    res.render('layout', {});
  });
  
  app.get('/views/*', function(req, res){
    res.render(req.params[0], {});
  });
  
  /* Patients */
  // show maps to clinician view or patient view based on flag
  app.get('/patients/:id', PatientController.show);
  // displays a table view of patients
  app.get('/patients', PatientController.list);

  app.get('/patients/:id/print', PatientController.print);
  
  // creates a new patient
  app.post('/patients', PatientController.create);
  // update a patient
  app.put('/patients/:id', PatientController.update);
  // delete a patient
  app.delete('/patients/:id', PatientController.remove);
  
}
