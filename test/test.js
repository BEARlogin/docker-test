const fs = require('fs');
const file = './output/test.txt';
const text = fs.readFileSync(file);
process.stdout.write('from test container TEXT IS ' + text);
