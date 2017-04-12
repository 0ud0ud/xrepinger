var Ping = require('./lib/ping.js'),
    websites = require('./websites.js'),
    server,
    port = process.env.PORT || 3000,
    monitors = [],
    express = require('express'),
    app = express();

websites.forEach(function(website) {
    var monitor = new Ping({
        website: website.url,
        timeout: website.timeout
    });

    monitors.push(monitor);
});

app.set('view engine', 'pug')

app.get('/', function(req, res) {
    var urls  = (JSON.stringify(websites)).replace(/\[?\{\"url":"(.+?)\",(.*?)(?:,|\])/g,'$1\n\n\n');
    res.render('index', { title: 'XREPinger!', url: urls })
})

app.listen(port, function() {
    console.log('App listening on port 3000!')
})