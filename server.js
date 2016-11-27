var express = require('express');
var app = express();
var PORT = 3000;
var middleware = {
	requireAuthentication: function (request, response, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (request, response, next) {
		var date = new Date().toString();
		console.log('Request: ' + request.method + ' ' + request.originalUrl + ' on date: ' + date);
		next();
	}
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about', middleware.requireAuthentication, function (request, response) {
	response.send('About us!');
});
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT);
});