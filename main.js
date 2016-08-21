//we are creating web based example by using node.js

var http = require("http");//required is inbuilt directive which 
                           //is used to load modules of node.js
http.createServer(function (request, response) {  
   // Send the HTTP header   
   // HTTP Status: 200 : OK  
   // Content Type: text/plain  
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   // Send the response body as "Hi solomon ,you are workin very hard"  
   response.end('Hello World\n');  
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');