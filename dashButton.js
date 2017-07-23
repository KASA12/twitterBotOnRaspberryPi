var dash_button = require('node-dash-button');

var dash = dash_button('fc:4a:e9:de:ad:05', null, null, 'all');
dash.on('detected', function(){
    console.log("pushed!!");
});