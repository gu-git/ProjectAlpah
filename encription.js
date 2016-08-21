const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Hello Solomon How r u doing these days')  
                   .digest('hex');  
console.log(hash);