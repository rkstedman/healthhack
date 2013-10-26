module.exports = function(app) {
  var Controller = { name: 'PatientController' },
      PatientModel = app.models.Patient;
  
  Controller.list = function(req, res){
    PatientModel.list({}, function(error, patients) {
      res.format({
        html: function(){
          if(error) {
            res.render('patients/patientList', {error: error});
          } else {
            res.render('patients/patientList', {patients: patients});
          }
        }, 
        json: function(){
          if(error) {
            res.send(error.code, error);
          } else {
            res.send(200, patients);
          }
        }
      });
    });
  };
  

  Controller.create = function(req, res) {
    var patient = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      isbn: req.body.isbn
    };
    PatientModel.create(patient, function(error) {
      if(error) {
        res.send(error.code, error);
      } else {
        res.send(201);
      }
    });
  };

  Controller.show = function(req, res) {
    // default to patient view if none specified
    var view = req.query.view | 'patient';
    var patientId = req.params.id;
    PatientModel.read(patientId, function(error, patient) {
      res.format({
        html: function(){
          if(error) {
            res.render('patients/patientList', {error: error});
          } else {
            res.render('patients/'+view+'View', {patient: patient, page:'patient'});
          }
        }, 
        json: function(){
          if(error) {
            res.send(error.code, error);
          } else {
            res.send(200, patient);
          }
        }
      });
    });
  };

  Controller.update = function(req, res) {
    var isbn = req.params.id;
    var patient = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      isbn: isbn
    };
    
    PatientModel.update(isbn, patient, function(error) {
      if(error) {
        res.send(error.code, error);
      } else {
        res.send(204);
      }
    });
  };

  Controller.remove = function(req, res) {
    var isbn = req.params.id;
    PatientModel.remove(isbn, function(error) {
      if(error) {
        res.send(error.code, error);
      } else {
        res.send(204);
      }
    });
  };
  
  return Controller;
}

