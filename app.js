const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

const app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes.routes);
app.use(usersRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send('<h4> Not Found </h4>')
});

app.listen(4000);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 404);
  res.render('error');
});

module.exports = app;
