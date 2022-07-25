const fs = require('fs');
const file = './output/test.txt';
fs.writeFileSync(file,'Hello world');
const text = fs.readFileSync(file);
process.stdout.write('FROM process container TEXT IS ' + text);
