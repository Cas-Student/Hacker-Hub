var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'casimirmacino@gmail.com',
    pass: '@tsuMi162!'
  }
});

var mailOptions = {
  from: 'casimirmacino@gmail.com',
  to: 'casimirmacino@student.hcps.org',
  subject: 'Proxy Link',
  text: window.location.href
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
