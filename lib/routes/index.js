module.exports = function(app) {
  var PatientController = app.controllers.PatientController;

  app.get('/', function(req, res){
    res.render('index', {page: 'home'});
  });
  
  app.get('/about', function(req, res){
    res.render('about', {page : 'about'});
  });
  
  
  /* Patients */
  app.get('/patients/new', PatientController.new);
  app.get('/patients/:id/edit', PatientController.edit);
  app.get('/patients', PatientController.list);
  app.post('/patients', PatientController.create);
  app.get('/patients/:id', PatientController.show);
  app.put('/patients/:id', PatientController.update);
  app.delete('/patients/:id', PatientController.remove);
  
}
