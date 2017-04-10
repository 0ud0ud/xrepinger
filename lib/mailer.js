var nodemailer = require('nodemailer'),
    config = require('../config.js'),
    mailer;

mailer = function(opts, fn) {

    var mailOpts, smtpTrans;

    // create reusable transporter object using the default SMTP transport
    var smtpTrans = nodemailer.createTransport('smtps://leguay.alexandre%40gmail.com:1981258121@smtp.gmail.com');

    // mailing options
    mailOpts = {
        from: opts.from,
        replyTo: opts.from,
        to: opts.to,
        subject: opts.subject,
        html: opts.body
    };

    // Send mail
    smtpTrans.sendMail(mailOpts, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};

module.exports = mailer;