var Ping = require('./ping'),
    websites = require('../websites'),
    monitors = [],
    url;

url = function(io) {
    websites.forEach(function(website) {
        var monitor = new Ping({
            website: website.url,
            timeout: website.timeout,
            sio: io
        });
        monitors.push(monitor);
    });
};

module.exports = url;