const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  
var encrypted = 'e8be64e0753c2f52c158d36cdd67e96f249e0fce76983d33ebce242a88c0cccd';  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted);