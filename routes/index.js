var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Armando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function (req, res, next) {
  const text = req.body.message;
  const user = req.body.name;

  messages.push({ text, user, added: new Date() });

  res.redirect('/');
});

module.exports = router;
