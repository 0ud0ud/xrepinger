var express = require('express'),
    router = express.Router(),
    websites = require('../websites'),
    login = require('./login'),
	config = require('../config.js');

router.get('/', login.basicAuth(config.email,config.password), function(req, res) {
    var urls = (JSON.stringify(websites)).replace(/\[?\{\"url":"(.+?)\",(.*?)(?:,|\])/g, '$1\n');
    urls = urls.split("\n");
    res.render('../views/index', {
        title: 'XREPinger!',
        url: urls
    })
})

module.exports = router;