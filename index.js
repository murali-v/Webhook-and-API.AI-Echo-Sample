var apiai = require('apiai');

var app = apiai("e6483d023e1a4ef2a63038636ea3ec3e");

/*var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
}); 
 */
var options = {
    sessionId: 'aa25ee14-0efb-4292-9bdf-dccf69063db1'
};

var request = app.textRequest('Hello', options);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
