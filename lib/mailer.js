var nodemailer = require('nodemailer'),
    config = require('../config.js'),
    mailer;

mailer = function(opts, fn) {

    var mailOpts, smtpTrans;

    // create reusable transporter object using the default SMTP transport
    var smtpTrans = nodemailer.createTransport({
        host: "smtp.office365.com",
        secureConnection: false,
        port: '587',
        auth: {
            user: config.email,
            pass: config.password
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    // mailing options
    mailOpts = {
        from: opts.from,
        replyTo: opts.from,
        to: opts.to,
        subject: opts.subject,
        html: opts.body
    };

    // Send mail
    smtpTrans.sendMail(mailOpts, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};

module.exports = mailer;