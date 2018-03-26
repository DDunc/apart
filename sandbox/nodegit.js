var shell = require('shelljs');
var fetch = require('node-fetch');
var btoa = require('btoa');
require('dotenv').config();

const absDir = `${process.env.ABSPATH}/${process.env.PROJECT_NAME}`;

shell.cd(absDir);
shell.exec('git init');
shell.exec('git add -A');
shell.exec('git commit -m "initial commit"');

fetch('https://api.github.com/user/repos', {
  method: 'POST',
  body: JSON.stringify({name: process.env.PROJECT_NAME, private: true}),
  headers: {
    "Content-Type": "text/json",
    'Authorization': 'Basic ' + btoa(`${process.env.GITHUB_USER}:${process.env.GITHUB_PASSWORD}`)
  }}).then(res => res.json()).then(res => {
shell.exec(`git remote add origin https://github.com/${process.env.GITHUB_USER}/${process.env.PROJECT_NAME}.git`);
shell.exec('git push origin master');
}).catch(err => console.log(err));

console.log("PROJ NAME", process.env.PROJECT_NAME);