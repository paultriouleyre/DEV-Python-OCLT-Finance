const fs = require('fs');
const path = require('path');
const stopFilePath = path.join(__dirname, 'stop_streaming.flag');
const SSC = require('sscjs');

// Function to check for stop signal
function checkForStopSignal() {
    return fs.existsSync(stopFilePath);
}

// Your existing WebSocket client setup
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('open', function open() {
    console.log('### opened ###');
});

wss.on('message', function incoming(data) {
    console.log('Received:', data);
    // Check for stop signal
    if (checkForStopSignal()) {
        console.log('Stop signal received. Closing WebSocket.');
        ws.close();
    }
});

wss.on('close', function close() {
    console.log('### closed ###');
});

wss.on('error', function error(err) {
    console.error('Error:', err);
});

// Periodically check for stop signal
setInterval(() => {
    if (checkForStopSignal()) {
        console.log('Stop signal received. Closing WebSocket.');
        ws.close();
    }
}, 1000); // Check every second

// Initialize SSC
const ssc = new SSC('https://api.hive-engine.com/rpc');

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