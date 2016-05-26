var express = require('express');
var router = require('../../../controllers');
var request = require('supertest');

var app = express();
app.use(router); 

module.exports = request(app);
