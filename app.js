var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var responders = require('./responders');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.use(express.favicon());
app.use(express.logger('dev')); // log only in dev ENV
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(responders());
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes.init(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
