var dashButton = function(macAddr, callback){
    var dash_button = require('node-dash-button');
    var dash = dash_button(macAddr, null, null, 'all');
    dash.on('detected', function(){
        callback && callback();
    });
}

module.exports = dashButton;