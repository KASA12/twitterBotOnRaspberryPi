var dash_button = require('node-dash-button');

var dash = dash_button('34:d2:70:02:c8:2b', null, null, 'all');
dash.on('detected', function(){
    console.log("pushed!!");
});