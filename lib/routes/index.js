
module.exports = function(app) {

  app.get('/', function(req, res){
    res.render('index', {page: 'home'});
  });
  
  app.get('/about', function(req, res){
    res.render('about', {page : 'about'});
  });
  
  app.get('/team', function(req, res){
    res.render('team', {page : 'team'});
  });


}