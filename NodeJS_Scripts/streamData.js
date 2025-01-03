const SSC = require('sscjs');
const WebSocket = require('ws');

// Initialize SSC
const ssc = new SSC('https://api.hive-engine.com/rpc');

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('Client connected');

  // Stream data from HIVE smart contract blockchain
  ssc.stream((err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
    ws.send(JSON.stringify(result));
  });
});

console.log('WebSocket server started on ws://localhost:8080');
