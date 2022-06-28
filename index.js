// TODO: Include packages needed for this application
//const { fs } = require('fs');
//require('fs');
const inquirer = require('inquirer');
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
            type: 'confirm',
            name: 'confirmTableofContents',
            message: 'Would you like to generate a table of contents?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'licenseOption',
            message: 'Select a license (Check one)',
            choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'No license']
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
            message: 'Enter Badge code if needed',
        
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
    ]);
};
promptUser()
.then(portfolioData => {
    console.log(portfolioData);
});
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
// fs.writeFile('./utils/README.md', generatePage(fileName, data, err => {
//     if (err) throw err;
//     console.log(complete);
// }));

//const generatePage = require('./utils/generateMarkdown.js');