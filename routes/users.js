const express = require('express');
const router = express.Router();

const indexData = require('./index')

/* GET users listing. */
router.get('/users', (req, res, next) => {
  console.log("Users", indexData.users);
  const users = indexData.users;
  res.render('users', { pageTitle: "users", users: users })
})

module.exports = router;
