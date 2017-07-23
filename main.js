var tweet = require('./tweet.js');
var dashButton = require('./dashButton.js');

var kaeritamiCount = 1;
var kaeritamistr = 
"＿人人人人人人人人人人＿\n\
＞　おうちかえりたい　＜\n\
￣Y^Y^Y^Y^Y^Y^Y^Y^Y￣\n";

dashButton(function(){
    tweet(kaeritamistr + "\n【" + kaeritamiCount + "回目】");
    kaeritamiCount++;
});