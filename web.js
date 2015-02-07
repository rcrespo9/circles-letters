var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist", {
  maxAge: 0,	
  clientMaxAge: 3600 * 1000
}));
app.listen(process.env.PORT || 5000);