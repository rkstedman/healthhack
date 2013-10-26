var path = require('path'),
    config = require(path.join(__dirname, '../../../config')),
    _ = require('underscore');
    
var patientsToAdd = [];

patientsToAdd.push({
  firstName: 'Marijn',
  lastName: 'Haverbeke',
  profile: {
    sex: 'm',
    ethnicity: 'caucasion',
    birthdate: new Date('Jun 12 1956'),
    referrer: {
      name: 'Dr. Jane Wazowski',
      clinic: 'RMIT Health Clinic',
      notes: 'family history of heart disease'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Oct 30 02:16:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 1 02:16:57 2013')
    }
  ],
  createdAt: Date.now
});

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(config.database.uri, function(err, db) {
  if(err) {
    console.log("Error connecting to database: " + err.toString().replace("Error: ",""));
    
  } else {
    console.log("Connected to DB " + config.database.uri);
    
    db.collection('patients').insert(patientsToAdd, function(error, patients) {
      if(error) {
        console.log('Error seeding database with patients');
      } else {
        console.log(patients.length+' new patients added to database: ' + _.pluck(patients, 'firstName').join(', '));
      }
      db.close();
    });
  }
});


