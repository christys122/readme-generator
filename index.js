// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
//const promptUser = [
    return inquirer.prompt([
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
                    console.log('Enter a title for your project');
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
            type: 'list',
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
                    console.log('please add a link to your screenshot');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Credits.. Please list collaborators, if any',
           
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
            message: 'Please describe how to contribute?',
       
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter any test commands for application',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What does the user need to know about using the repo?',
            
        },
    ]);
};

    
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
              return console.log(err);
            }
          
            console.log("Success! Your README.md file has been generated")
        });
    };
   
    questions()
    .then (pageData => {
        const pageREADME = generateMarkdown(pageData);
        fs.writeFile('./README.md', pageREADME, err => {
          if (err) throw new Error(err);
          return;
        })
        console.log('success');
    });

    

