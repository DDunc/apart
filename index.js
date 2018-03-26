var suppose = require('suppose')
  , fs = require('fs')
  , assert = require('assert')
  , shell = require('shelljs')
  , child_process = require('child_process');


//console.log(shell.which('npm'));

//shell.exec('npm init');
//shell.exec('npm init');
//shell.exec('echo apart2k1\n');

//shell.send('apart2k1 \n');

child_process.execFileSync('npm', ['init'], {stdio: 'inherit'});

suppose('npm', ['init'], {debug: fs.createWriteStream('/tmp/debug.txt')})
.when(/name\: \([\w|\-]+\)[\s]*/).respond('awesome_package\n')

//suppose('npm', 'init').when(/name\: \([\w|\-]+\)[\s]*/).respond('awesome_package\n');
//shell.stdout('apart2k1');
// /*
// process.chdir('./tmp/awesome');
// //fs.writeFileSync('/tmp/awesome/README.md', 'READ IT')
// // debug is an optional writeable output stream
// suppose('npm', ['init']).when(/name\: \([\w|\-]+\)[\s]*/).respond('awesome_package\n')
// .when('version: (1.0.0) ').respond('0.0.1\n')
// // response can also be the second argument to .when
// .when('description: ', "It's an awesome package man!\n")
// .when('entry point: (index.js) ').respond("\n")
// .when('test command: ').respond('npm test\n')
// .when('git repository: ').respond("\n")
// .when('keywords: ').respond('awesome, cool\n')
// .when('author: ').respond('JP Richardson\n')
// .when('license: (MIT) ').respond('MIT\n')
// .when('ok? (yes) ' ).respond('yes\n')
// .on('error', function(err){
//   console.log(err.message, "err");
// })
// .end(function(code){
//   var packageFile = './tmp/awesome/package.json';
//   fs.readFile(packageFile, function(err, data){
//     var packageObj = JSON.parse(data.toString());
//     console.log(packageObj.name, "pkgobj"); //'awesome_package'
//   })
// }); */