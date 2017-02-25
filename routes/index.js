
var express = require('express');
var router = express.Router();
// var json = require('../tweets.json');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/node_mongo2';

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(json[1].text);
  getTweets({},
		function (tweets) {
			res.render("index", {objects:tweets, title:'Tweets'});
		});
});
// Connection URL

function getTweets(query, callback) {
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to Mongo");
		var tweets = db.collection("tweets");
		console.log(tweets);

		tweets.find(query).toArray(function(err, docs) {
	    assert.equal(err, null);
	    console.log("Found the following records");
	    console.log(docs);
	    callback(docs);

	    db.close();
	  });
	});
}



module.exports = router;
