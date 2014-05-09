var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<form method="post" action="/formsubmit">' + '\n' +
	'<input name="email" type="email"><input type="submit"></form>');
});

app.post('/formsubmit', function(req, res) {
	res.redirect('/success')
});	

app.get('/success', function(req, res) {
	res.send('Thank you')
});

var port = process.env.PORT || 3465

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
