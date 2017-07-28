var express = require('express')
var expressApp = express()
const bodyParser = require('body-parser');
expressApp.use(bodyParser.urlencoded({
    extended: true
}));
expressApp.use(bodyParser.json());
expressApp.post('/echo', function (req, res) {
       var data = req.replyData;
       var botID = req.botID
       return res.json({
        info: data,
        displayText: data,
        source: 'webhook-echo-sample',
        responseOverride: "This is an echo from the webhook"
    });
});
