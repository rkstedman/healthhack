module.exports = function(app) {
  var ObjectId = require('mongodb').ObjectID;
  
  var Model = { name: 'PatientModel' },
      collection = app.db.collection('patients');
  
  Model.list = function(query, callback) {
    try {
      collection.find(query).toArray(function(error, patients) {
        if(error) {
          console.log(Model.name + ' #list error when performing find ' + error.toString());
          callback(app.config.errors.database_error);
        } else {
          callback(null, patients);
        }
      });
    } catch(exception) {
      console.log(Model.name + ' #list exception when performing find ' + exception);
      callback(app.config.errors.database_error);
    }  
  };
  
  Model.create = function(patientToAdd, callback) {
    try {
      collection.insert(patientToAdd, {safe: true}, function(error, patients) {
        if(error) {
          console.log(Model.name + ' #create error when inserting '+ patientToAdd.toString() + ' - '+ error.toString());
          callback(app.config.errors.database_error);
        } else if(!patients[0]) {
          console.log(Model.name + ' #create no patients were created for '+ patientToAdd.toString());
          callback(app.config.errors.database_error);
        } else {
          callback(null);
        }
      });
    } catch(exception) {
      console.log(Model.name + ' #create exception when inserting '+ patientToAdd + ' - '+ exception);
      callback(app.config.errors.database_error);
    }  
  };
  
  Model.read = function(patientId, callback) {
    try {
      collection.findOne({_id: ObjectID(patientId)}, function(error, patient) {
        if(error) {
          console.log(Model.name + ' #read error when finding patient '+ patientId + ' - '+ error.toString());
          callback(app.config.errors.database_error);
        } else if(patient === null){
          console.log(Model.name + ' #read could not find patient '+ patientId);
          callback(app.config.errors.resource_not_found);
        } else {
          callback(null, patient);
        } 
      });
    } catch(exception) {
      console.log(Model.name + ' #read exception when finding patient '+ patientId +' - ' + exception);
      callback(app.config.errors.database_error);
    }  
  };
  
  Model.update = function(patientId, patient, callback) {
    try {
      collection.update({_id: ObjectID(patientId)}, patient, {safe: true, multi: false}, function(error) {
        if(error) {
          console.log(Model.name + ' #update error when updating patient '+ patientId + ' - '+ error.toString());
          callback(app.config.errors.database_error);
        } else {
          callback(null);
        }
      });
    } catch(exception) {
      console.log(Model.name + ' #update exception when performing update ' + exception);
      callback(app.config.errors.database_error);
    }
  };
  
  Model.remove = function(patientId, callback) {
    try {
      collection.remove({_id: ObjectID(patientId)}, function(error) {
        if(error) {
          console.log(Model.name + ' #remove error when removing '+ patientId + ' - '+ error.toString());
          callback(app.config.errors.database_error);
        } else {
          callback(null);
        }
      });
    } catch(exception) {
      console.log(Model.name + ' #remove exception when removing '+ patientId + ' - '+ exception);
      callback(app.config.errors.database_error);
    }
  };
  
  return Model;
}