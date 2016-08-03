var express = require('express');
var app = express();

app.get('/', function(req, res){
    var reqObj = JSON.stringify(req.headers);
    var resObj = {}
    resObj.language = req.headers['accept-language'].split(',')[0];
    resObj.ipAddress = req.headers['x-forwarded-for']
    resObj.software = req.headers['user-agent'].split(' (')[1].split(') ')[0];
    
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    res.end(JSON.stringify(resObj));
    
    
});

app.listen(process.env.PORT || 8080);