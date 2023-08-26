var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rasheedmokadem@gmail.com',
      pass: '26608648'
    }
  });
  
  var mailOptions = {
    from: 'rasheedmokadem@gmail.com',
    to: 'rachidmokaddem068@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });