var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/send', function(req, res, next) {
  var transporter =  nodemailer.createTransport({
  	service:'Yahoo',
  	auth:{
  		user:'',
  		pass:'something'
  	}
  });

  var mailOptions = {
  	from:'Node js <nodejs@gmail.com>',
  	to:'praveen.suthar@helioustechservices.com',
  	subject:'Node js Contact ',
  	text:'You have a new contact email following details, name: '+req.body.name+'',
  	html:'<p>You Got a email From Contact</p><ul><li>Name: '+req.body.neme+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error,info){
  	if(error){
  		console.log(error);
  		res.redirect('/');
  	}
  	else{
  		console.log('Message Sent Succesfully !'+info.response);
  		res.redirect('/');
  	}
  })


});


module.exports = router;
