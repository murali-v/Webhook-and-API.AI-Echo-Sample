var apiai = require('apiai');

var app = apiai("e6483d023e1a4ef2a63038636ea3ec3e");

var express = require('express')
var expressApp = express()

expressApp.post('/echo', function (req, res) {
    var request = app.textRequest('Hello', {
        sessionId: 'aa25ee14-0efb-4292-9bdf-dccf69063db1'
    });
    
    request.on('response', function(response) {
        console.log(response);
        res.send(response);
    });

    request.on('error', function(error) {
        console.log(error);
        res.send(error);
    });

    request.end();
})

var server = expressApp.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
