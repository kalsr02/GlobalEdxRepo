
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  user = require('./routes/user'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', {
    pageName: 'Home'
  });
});

app.get('/Training', function(req, res){
  res.render('training', {
    pageName: 'Training'
  });
});

app.get('/Services', function(req, res){
  res.render('services', {
    pageName: 'Services'
  });
});

app.get('/LiveProjects', function(req, res){
  res.render('liveprojects', {
    pageName: 'LiveProjects'
  });
});

app.get('/contactus', function(req, res){
  res.render('contactus', {
    pageName: 'ContactUs'
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

