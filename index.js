// TODO: Include packages needed for this application
//const { fs } = require('fs');
//require('fs');
require('inquirer');

// TODO: Create an array of questions for user input
// orig = const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fileName',
            message: 'What is your file name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter file name');
                    return false;
                }
            }
        },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
fs.writeFile('README.md', generatePage(fileName, data, err => {
    if (err) throw err;
    console.log(complete);
}));
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');