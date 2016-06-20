var express = require('express');
var router = express.Router();
var test = require('../controllers/test');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

/*GET data google api*/
router.get('/test', function(req, res, next) {
	test.callAPI().then(function(result) {
		var start_location = [];
		for(i=0; i <= result.routes[0].legs[0].steps.length; i++){
			if(i === result.routes[0].legs[0].steps.length) {
				res.send(start_location);
			}else {
				start_location.push(result.routes[0].legs[0].steps[i].start_location);
			}
		}
		//res.send(result);
	})
	.then(null, function(err) {
		res.send(err);
	});
});

module.exports = router;
