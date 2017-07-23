var tweet = function(tweetStr){
    var twit = require('twit');
    var fs = require('fs');

    var SECRET = JSON.parse(fs.readFileSync('./SECRET.json', 'utf8'));

    var T = new twit({
        consumer_key:           SECRET.consumer_key,
        consumer_secret:        SECRET.consumer_secret,
        access_token:           SECRET.access_token,
        access_token_secret:    SECRET.access_token_secret
    })

    T.post('statuses/update', { status: tweetStr }, function(err, data, response){
        console.log(data);
    });
}

module.exports = tweet;

