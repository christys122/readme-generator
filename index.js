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
            name: 'projectTitle',
            message: 'What is your project title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter file name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Provide a short description (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a description');
                    return false;
                }
            }
        },
        {
            //table of contents to be added automatically
            type: 'confiem',
            name: 'confirmTableofContents',
            message: 'Would you like to generate a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add steps to install your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter installation steps or N/A');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Enter usage, and examples (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter file name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Add link to screenshot image ![alt text] (path.png) (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter file name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectCredits',
            message: 'Credits.. Please list collaborators, if any',
           
        },
        //Badges? 
        {
            type: 'input',
            name: 'projectBadges',
            message: 'Enter Badges (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter badges');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectFeatures',
            message: 'Please list project features? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter feature description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contribute',
            message: 'Please describe how to contribute? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter Contribute steps');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTests',
            message: 'Enter any Tests for application',
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