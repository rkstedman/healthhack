module.exports = function(app) {
  var PatientController = app.controllers.PatientController;

  app.get('/', function(req, res){
    res.render('index', {page: 'home'});
  });
  
  app.get('/about', function(req, res){
    res.render('about', {page : 'about'});
  });
  
  

}
