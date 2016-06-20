
    var https = require("https");
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
    callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log(str);
        });
    }

    https.request(options, callback).end();
