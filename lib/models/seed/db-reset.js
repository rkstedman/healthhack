var path = require('path'),
    config = require(path.join(__dirname, '../../../config'));

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(config.database.uri, function(err, db) {
  if(err) {
    console.log("Error connecting to database: " + err.toString().replace("Error: ",""));
    
  } else {
    console.log("Connected to DB " + config.database.uri);
    
    db.collection('patients').drop();
    console.log('Dropped patients collection');
    
    db.close();
  }
});

