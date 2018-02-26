const express = require('express');
const app = express();

app.use('/store', function(req, res, next) {
	console.log('I am middleman at the request to /store');
	next();
});

app.get('/', function(req, res) {
	res.send('Hello');
});

app.get('/store', function(req, res) {
	res.send('This is store');
});

app.listen(3000);

app.use(function(req, res, next) {
	res.status(404).send('Invalid url');
});
