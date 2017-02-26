
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
// var url = 'mongodb://localhost:27017/node_mongo2';

//URI de mongo user:tweets-user pass:mongotweets
var url = 'mongodb://tweets-user:mongotweets@ds161069.mlab.com:61069/node-tweets';
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
