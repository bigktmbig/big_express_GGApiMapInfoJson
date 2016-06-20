var https = require("https");
var q = require('q');

function getData() {
    var options = {
        host: 'maps.googleapis.com',
        port: 443,
        path: '/maps/api/directions/json?origin=Ha%20Noi&destination=Da%20Nang&key=AIzaSyDbZPWwXGsMksQhEf6IY4aUfBGwCRm24tc',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    /**
    * getJSON:  REST get request returning JSON object(s)
    * @param options: http options object
    * @param callback: callback to pass the results JSON object(s) back
    */
    var deferred = q.defer();
    
    var req = https.request(options, function (res) {
        res.setEncoding('utf8');

        var data = '';

        res.on('data', function (chunk) {
            data += chunk;
        });

        res.on('end', function () {
            try {
                deferred.resolve(JSON.parse(data));
            } catch (e) {
                deferred.reject(new Error(e));
            }
        });
    });

    req.on('error', function (err) {
        deferred.reject(err);
    });

    req.end();

    return deferred.promise;
};

exports.callAPI = function () {
    return getData();
};