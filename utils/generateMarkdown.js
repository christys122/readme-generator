// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


//  TODO: Create a function that returns the license link
//  If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
 function generateMarkdown(pageData) {
  return `# ${pageData.title}
  ${renderLicenseBadge(pageData.license)}

  ## Description

${pageData.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(pageData.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependecies, run the following command:

\`\`\`
${pageData.installation}
\`\`\`

## Usage

${pageData.usage}

${renderLicenseSection(pageData.license)}

## Contributing

${pageData.contribute}

## Tests

To run tests, run the following command:

\`\`\`
${pageData.tests}
\`\`\`

## Questions

If you have any questions about the repo, open and issue or contact me directly at ${pageData.email}.
You can find more of my work at [${pageData.username}](https://github.com/${pageData.username}/).

`;
 

};

module.exports = generateMarkdown;
