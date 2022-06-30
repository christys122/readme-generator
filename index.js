// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


//require('fs'); above not in sample

//require('inquirer');

// TODO: Create an array of questions for user input
// orig = const questions = [];
const promptUser = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Git Hub user name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter user name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter Git Hub e-mail address');
                return false;
            }
        }
    },
        {
            type: 'input',
            name: 'title',
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
            name: 'description',
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
            name: 'license',
            message: 'Select a license (Check one)',
            choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'No license']
        },//change to arrow key to select one
        {
            type: 'input',
            name: 'installation',
            message: 'Add command to install dependencies your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter installation or N/A');
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'usage',
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
            name: 'credits',
            message: 'Credits.. Please list collaborators, if any',
           
        },
        //Badges? 
        {
            type: 'input',
            name: 'badges',
            message: 'Enter Badge code if needed',
        
        },
        {
            type: 'input',
            name: 'features',
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
            name: 'contribute',
            message: 'Please describe how to contribute? (Required)',
       
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter any test commands for application',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What does the user need to know about using the repo? (Required)',
            
        },
    ]


.then(data => {
    const generateMarkdown = `${data}`
      
// promptUser()
// .then(portfolioData => {
//     const pageREADME = generatePage(portfolioData);
 fs.writeFile(generateMarkdown, pageREADME(data, null), err => {
     if (err) throw new Error(err);
    console.log('page created')
 });
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// .then (pageREADME => {
//     return fs.writeFile(pageREADME);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return fs.copyFile();
// })
// .catch(err => {
//     console.log(err);
// });
// TODO: Create a function to initialize app


  //  function init() {
// fs.writeFile('README.md', generatePage(portfolioData, data), err => {
//     if (err) throw err;
//     console.log(complete);

// });

//
//Function call to initialize app
//init();

