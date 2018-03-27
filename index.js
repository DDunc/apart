var fs = require('fs')
  , assert = require('assert')
  , shell = require('shelljs')
  , child_process = require('child_process');

const [nodedir, idx, ...rest] = process.argv;

//console.log(process.argv, ' argv');

//console.log(rest, ' rest!');

child_process.exec('./apart.sh', rest);
