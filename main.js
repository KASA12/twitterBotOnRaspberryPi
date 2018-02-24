var tweet = require('./tweet.js');
var dashButton = require('./dashButton.js');

var kaeritamiCount = 1;
const kaeritamistr = 
"＿人人人人人人人人人人＿\n\
＞　おうちかえりたい　＜\n\
￣Y^Y^Y^Y^Y^Y^Y^Y^Y￣\n";

dashButton('34:d2:70:02:c8:2b', function(){
    var date = new Date();
    var timeStr =
        date.getFullYear() + "/" + 
        zeroPadding(date.getMonth()+1, 2) + "/" + 
        zeroPadding(date.getDate(), 2) + " " +
        zeroPadding(date.getHours(), 2) + ":" + 
        zeroPadding(date.getMinutes(), 2) + "." + 
        zeroPadding(date.getSeconds(), 2);
    var postStr =
        "【" + kaeritamiCount + "回目】" + timeStr + "\n\n" + kaeritamistr + "\n\n";
    tweet(postStr);
    kaeritamiCount++;
});

function zeroPadding(val, width){
    return ('0000'+val).slice(-width);
}