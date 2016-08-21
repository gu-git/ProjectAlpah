const zlib = require('zlib');  
const gzip = zlib.createGzip();  
const fs = require('fs');  
const inp = fs.createReadStream('hello.txt');  
const out = fs.createWriteStream('hello.txt.gz');  
inp.pipe(gzip).pipe(out);