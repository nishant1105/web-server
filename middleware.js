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

module.exports = middleware;