var server,
    port = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    routes = require('./lib/routes'),
    url = require('./lib/url');

url();

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.set('view engine', 'ejs')

app.listen(port, function() {
    console.log('App listening on port 3000!')
})