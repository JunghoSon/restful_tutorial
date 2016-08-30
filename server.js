var express    = require('express'),
	app        = express(),
	bodyParser = require('body-parser'),
	session    = require('express-session'),
	fs         = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(req, res){
	console.log('Express server has started on port 3000');
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
	secret : '@#@$MYSIGN#@$#$',
	resave : false,
	saveUninitialized : true
}));

var router = require('./router/main')(app, fs);