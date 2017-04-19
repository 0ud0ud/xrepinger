var Ping = require('./ping'),
    websites = require('../websites'),
    monitors = [],
    url;

url = function() {
    websites.forEach(function(website) {
        var monitor = new Ping({
            website: website.url,
            timeout: website.timeout
        });
        monitors.push(monitor);
    });
};

module.exports = url;