const express = require('express');
const router = express.Router();

const users = [];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add User' });
});

router.post('/index/add-user', (req, res, next) => {
  console.log(req.body)
  users.push({ name: req.body.name});
  res.redirect('/users')
});

exports.routes = router;
exports.users = users;