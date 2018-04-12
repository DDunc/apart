const fs = require('fs');
require('dotenv').config({path: `${__dirname}/.apartrc`});

console.log(`${__dirname}/${process.argv[5]}/package.json`, 'pkg');
