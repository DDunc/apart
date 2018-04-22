const inquirer = require('inquirer');
const fs = require('fs-extra');

const validateYN = (value) => {
  const pass = value.match('y') || value.match('n');

  if (pass) {
    return true;
  }

  return 'Please enter y or n';
};

const generateShrc = () => {
  const questions = [
    {
      type: 'input',
      name: 'GENERATE_README',
      message: 'Generate a readme with the new package created by apart? (y/n)',
      validate: validateYN
    },
    {
      type: 'input',
      name: 'ADD_CHILD_DEPS',
      message: 'Add dependencies to new package? (y/n)',
      validate: validateYN
    },
    {
      type: 'input',
      name: 'ADD_NEW_DEP',
      message: 'Automatically add the new package to the dependencies of current project? (y/n)',
      validate: validateYN
    },
    {
      type: 'input',
      name: 'PUSH_TO_GITHUB',
      message: "Push new repo to github? (y/n)",
      validate: validateYN
    },
    {
      type: 'input',
      name: 'IS_PRIVATE',
      message: 'Make new repo private (y/n)',
      validate: validateYN
    },
    {
      type: 'input',
      name: 'DELETE_LOCAL_REPO',
      message: 'Delete generated local folder for new package? (y/n)',
      validate: validateYN
    }
  ];

  inquirer.prompt(questions).then(answers => {

    let apartrc = Object.keys(answers).reduce((av, cv) => {
      return {...av, [cv]: answers[cv] === 'y'}
    }, {IS_APP: false});

    fs.writeFile(`${__dirname}/.apartrc`, JSON.stringify(apartrc, null, '\t'), (err, success) => {
      if (err) {
        throw new Error(err);
      }
      console.log(apartrc)
    });
  });
};

fs.unlink(`${__dirname}/.apartrc`).then(ret => generateShrc()).catch(e => generateShrc());
