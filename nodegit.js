var shell = require('shelljs');
var fetch = require('node-fetch');
var btoa = require('btoa');
var path = require('path');
var browserify = require('browserify');
var installMissing = require('install-missing');
const writePkg = require('write-pkg');
const editJsonFile = require("edit-json-file");
const fs = require('fs');
const acorn = require('acorn');

//const testHello = require('./unicorn/test');
//const esCodeGen = require('escodegen');

// var recast = require("recast");
//
// // Let's turn this function declaration into a variable declaration.
// var code = [
//   "function add(a, b) {",
//   "  return a +",
//   "    // Weird formatting, huh?",
//   "    b;",
//   "}"
// ].join("\n");
//
// // Parse the code using an interface similar to require("esprima").parse.
// var ast = recast.parse(code);
//
// console.log(ast, 'recast');
//
// console.log(recast.print(ast).code, 'printed!!!!');
//const codeToParse = fs.readFileSync('./unicorn/test.js', 'utf8');

//console.log(JSON.stringify(acorn.parse(codeToParse)), 'acorn!!')

//console.log(esCodeGen.generate(codeToParse), 'esCodeGen');

//console.log(acorn.parse('./unicorn/test'), 'acorn!!')

//console.log(testHello.helloUpper, testHello.howdy, "test!");

const PROJECT_NAME = process.env.PROJECT_NAME;

const ENTRY_POINT = process.env.ENTRY_POINT;

const isApp = true;

const generateReadme = true;

const addDeps = true;
const GITHUB_USER = process.env.GITHUB_USER;
//So we run init, then run install missing
//https://developer.github.com/v3/repos/releases/#create-a-release


if (isApp) {
  let file = editJsonFile(`${__dirname}/${PROJECT_NAME}/package.json`);
  file.set('scripts.start', `node ${ENTRY_POINT}`);
  file.save();
}

if (generateReadme) {
  fs.writeFileSync(`${__dirname}/${PROJECT_NAME}/readme.md`,  `# ${PROJECT_NAME}\n This repo has been generated with [Apart](https://github.com/DDunc/apart), a CLI tool
		designed to dramatically simplify the workflow associated with creating new packages out of existing code.
			`)
}


//https://developer.github.com/v3/repos/#create
//git rev-list --max-parents=0 HEAD

//response.html_url#

//var originJSON = fs.readFileSync('.unicorn/package.json', 'utf-8')



console.log(process.cwd().replace(`${process.env.PROJECT_NAME}`, '.env'));

console.log(process.env.PROJECT_NAME, 'projname');

const result = require('dotenv').config({path: process.cwd().replace(`${process.env.PROJECT_NAME}`, '.env')});

if (result.error) {
  throw result.error
}

// console.log(result.parsed);
//
// console.log(process.env.ABSPATH, 'ABSPATH');
const absDir = `${process.env.ABSPATH}/${process.env.PROJECT_NAME}`;

shell.cd(absDir);

const addChildDeps = true;

if (addChildDeps) {
  shell.exec(`install-missing`)
}

shell.exec('git init');

fs.writeFileSync(`${__dirname}/${PROJECT_NAME}/.gitignore`, `
.env\n
node_modules\n
.idea\n
DS_store
`);

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


  if (addDeps) {
    let localPackageJson = editJsonFile(`${__dirname}/package.json`);
    console.log(localPackageJson, 'as json');
    //const commitIsh = child_process.exec('git rev-list --max-parents=0 HEAD');
    //#${commitIsh}
    localPackageJson.set(`dependencies.${PROJECT_NAME}`, `${GITHUB_USER}/${PROJECT_NAME}`);
    localPackageJson.save();
  }



}).catch(err => console.log(err, 'halp!'));