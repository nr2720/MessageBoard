var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Insane j'en reviens pas",
    user: "Jesse",
    added: new Date().toJSON().slice(0, 10)
  },
  {
    text: "Yooooooooo",
    user: "Alex Blou",
    added: new Date().toJSON().slice(0, 10)
  }, 
  
  {
    text: "Malade ce que tu viens de creer, J'ai toujours cru en toi! ",
    user: "R",
    added: new Date().toJSON().slice(0, 10)
  },
  
  {
    text: "Whats up comment ca va",
    user: "Zach",
    added: new Date().toJSON().slice(0, 10)
  }
];











/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});



router.get('/new', function(req, res, next) {
  res.render('newMessage', {title: 'New Message'});
});


router.post('/new', function(req, res, next) {
  const message = req.body;
  const newMessage = {
    text: message.message,
    user: message.name,
    added: new Date().toJSON().slice(0, 10),
  }
  messages.push(newMessage);

  res.redirect('/')
});
module.exports = router;
