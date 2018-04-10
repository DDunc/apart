const fs = require('fs');
require('dotenv').config({path: `${__dirname}/.apartshrc`});

fs.writeFileSync(`${__dirname}/demo/package.json`, `{
  "name": "demo",
  "version": "0.0.1",
  "description": "",
  "main": "whatever.js",
  "author": "DDUNC",
  "license": "MIT"
}
`);
