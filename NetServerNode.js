
const net = require('net');  
var server = net.createServer((socket) => {  
  socket.end('goodbye from the server\n');  
}).on('error', (err) => {  
  // handle errors here  
  throw err;  
});  
// grab a random port.  
server.listen(() => {  
  address = server.address();  
  console.log('opened server on %j', address);  
});