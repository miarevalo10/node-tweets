
var express = require('express');
var router = express.Router();
var json = require('../tweets.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(json[1].text);
  res.render('index',{objects:json, title:'Tweets'});

});

module.exports = router;
