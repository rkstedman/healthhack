
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, '../public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// database connection
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(app.config.database.uri, function (error, db) {
  if(error) {
    console.log("Error connecting to database: ", error);
  } else {
    console.log("Connected to DB " + app.config.database.uri);
    
    app.db = db;
    app.models = {
      Patient : require('./models/patient')(app)
    };
    app.controllers = {
      PatientController : require('./controllers/patient')(app)
    };

    require('./routes')(app);

    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });

  }
});

