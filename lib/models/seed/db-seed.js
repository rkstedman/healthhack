var path = require('path'),
    config = require(path.join(__dirname, '../../../config')),
    _ = require('underscore');
    
var patientsToAdd = [];

patientsToAdd.push({
  firstName: 'Marijn',
  lastName: 'Haverbeke',
  profile: {
    sex: 'm',
    ethnicity: 'Caucasian',
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


patientsToAdd.push({
  firstName: 'Linda',
  lastName: 'Marshall',
  profile: {
    sex: 'f',
    ethnicity: 'Caucasian',
    birthdate: new Date('Feb 3 1961'),
    referrer: {
      name: 'Dr. Anne Tallons',
      clinic: 'Glen Waverley Health Centre',
      notes: 'Father had two strokes and uncle (maternal) died of prostate cancer'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Oct 31 02:16:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 5 02:16:57 2013')
    }
  ],
  createdAt: Date.now
});

patientsToAdd.push({
  firstName: 'Michael',
  lastName: 'Johnson',
  profile: {
    sex: 'm',
    ethnicity: 'Caucasian',
    birthdate: new Date('Jul 30 1942'),
    referrer: {
      name: 'Prof. Susan Lewis',
      clinic: 'Epworth Hospital Cardiac Unit',
      notes: 'Several family members with high blood pressure problem'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 1 02:16:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 5 06:00:57 2013')
    }
  ],
  createdAt: Date.now
});

patientsToAdd.push({
  firstName: 'Ethan',
  lastName: 'Aaron',
  profile: {
    sex: 'm',
    ethnicity: 'Ashkenazi Jews',
    birthdate: new Date('May 13 1979'),
    referrer: {
      name: 'Dr. Manila Nicol',
      clinic: 'West Footscray Care',
      notes: 'No family health history on record'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 2 09:16:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 5 10:00:57 2013')
    }
  ],
  createdAt: Date.now
});


patientsToAdd.push({
  firstName: 'Lee-Shu',
  lastName: 'Liang',
  profile: {
    sex: 'f',
    ethnicity: 'other',
    birthdate: new Date('Jun 11 1961'),
    referrer: {
      name: 'Dr. Matthew Kent',
      clinic: 'St Kilda Central Clinical',
      notes: 'Father had cardiac arrest at the age of 65'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 4 09:16:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 8 10:00:57 2013')
    }
  ],
  createdAt: Date.now
});

patientsToAdd.push({
  firstName: 'Jake',
  lastName: 'Baheroin',
  profile: {
    sex: 'm',
    ethnicity: 'Other',
    birthdate: new Date('Jan 2 1984'),
    referrer: {
      name: 'Dr. Jordan Sammy',
      clinic: 'Cabrini Care Diabetes Outpatient Unit',
      notes: 'All close family members are in healthy state'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 13 10:16:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 15 12:00:57 2013')
    }
  ],
  createdAt: Date.now
});

patientsToAdd.push({
  firstName: 'Jamie',
  lastName: 'Rockoff',
  profile: {
    sex: 'f',
    ethnicity: 'Other',
    birthdate: new Date('Jul 1 1972'),
    referrer: {
      name: 'Dr. Alan Metcalf',
      clinic: 'Melbourne Health Clinic',
      notes: 'Family history of high cholesterol and obesity problems'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 11 09:13:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 18 10:00:57 2013')
    }
  ],
  createdAt: Date.now
});

patientsToAdd.push({
  firstName: 'Patrick',
  lastName: 'Nelson',
  profile: {
    sex: 'm',
    ethnicity: 'Caucasian',
    birthdate: new Date('Jul 28 1966'),
    referrer: {
      name: 'Dr. Jenny Pam',
      clinic: 'Northern Health Clinic',
      notes: 'Family history unknown'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 21 09:13:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 23 10:00:57 2013')
    }
  ],
  createdAt: Date.now
});

patientsToAdd.push({
  firstName: 'James',
  lastName: 'Jefferson',
  profile: {
    sex: 'm',
    ethnicity: 'African American',
    birthdate: new Date('Sep 12 1979'),
    referrer: {
      name: 'Prof. Renee Vinah',
      clinic: 'Royal Melbourne Outpatient Clinic',
      notes: 'Two maternal uncles had serious cardiac problem, details not clear'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 12 10:13:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 18 11:00:57 2013')
    }
  ],
  createdAt: Date.now
});

patientsToAdd.push({
  firstName: 'Hillary',
  lastName: 'Nice',
  profile: {
    sex: 'f',
    ethnicity: 'Caucasian',
    birthdate: new Date('Aug 3 1947'),
    referrer: {
      name: 'Dr. David Snohgoff',
      clinic: 'Bundoora Health Clinic',
      notes: 'Family history of high cholesterol and high pressure problem'
    }
  },
  appointments: [
    {
      type: 'preconsult',
      time: new Date('Nov 23 09:13:57 2013')
    },
    {
      type: 'postconsult',
      time: new Date('Nov 29 10:00:57 2013')
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


