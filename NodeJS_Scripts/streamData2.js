const SSC = require('sscjs');

const ssc = new SSC('https://api.hive-engine.com/rpc');
ssc.stream((err, res) => {
	console.log(err, res);
});