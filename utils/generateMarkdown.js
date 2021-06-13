// TODO: Create a function that returns a license badge based on which license is passed in

const licenseArray = require("./generateLicense");

// If there is no license, return an empty string
function renderLicenseBadge(license, badgeColor) {
  if (!badgeColor){badgeColor="9cf"} //default color if none chosen
  switch (license){
    case "Academic Free License v3.0" : return (`<img src="https://img.shields.io/badge/license-afl--3.0-${badgeColor}" alt="license badge"`);break;
    case "Apache license 2.0" : return (`<img src="https://img.shields.io/badge/license-apache--2.0-${badgeColor}" alt="license badge"`)
    case "Artistic license 2.0" : return (`<img src="https://img.shields.io/badge/license-artistic--2.0-${badgeColor}" alt="license badge"`)
    case "Boost Software License 1.0" : return (`<img src="https://img.shields.io/badge/license-bsl--1.0--2.0-${badgeColor}" alt="license badge"`)
    case "BSD 2-clause Simplified license" : return (`<img src="https://img.shields.io/badge/license-bsd--2--clause-${badgeColor}" alt="license badge"`)
    case "BSD 3-clause New or Revised license" : return (`<img src="https://img.shields.io/badge/license-bsd--3--clause-${badgeColor}" alt="license badge"`)
    case "BSD 3-clause Clear license" : return (`<img src="https://img.shields.io/badge/license-bsd--3--clause--clear-${badgeColor}" alt="license badge"`)
    case "Creative Commons license family" : return (`<img src="https://img.shields.io/badge/license-cc-${badgeColor}" alt="license badge"`)
    case "Creative Commons Zero v1.0 Universal" : return (`<img src="https://img.shields.io/badge/license-cc0--1.0-${badgeColor}" alt="license badge"`)
    case "Creative Commons Attribution 4.0" : return (`<img src="https://img.shields.io/badge/license-cc--by--4.0-${badgeColor}" alt="license badge"`)
    case "Creative Commons Attribution Share Alike 4.0" : return (`<img src="https://img.shields.io/badge/license-cc--by--sa--4.0-${badgeColor}" alt="license badge"`)
    case "Do What The F*ck You Want To Public License" : return (`<img src="https://img.shields.io/badge/license-wtfpl-${badgeColor}" alt="license badge"`)
    case "Educational Community License v2.0" : return (`<img src="https://img.shields.io/badge/license-ecl--2.0-${badgeColor}" alt="license badge"`)
    case "Eclipse Public License 1.0" : return (`<img src="https://img.shields.io/badge/license-epl--1.0-${badgeColor}" alt="license badge"`)
    case "Eclipse Public License 2.0" : return (`<img src="https://img.shields.io/badge/license-epl--2.0-${badgeColor}" alt="license badge"`)
    case "European Union Public License 1.1" : return (`<img src="https://img.shields.io/badge/license-eupl--1.1-${badgeColor}" alt="license badge"`)
    case "GNU Affero General Public License v3.0" : return (`<img src="https://img.shields.io/badge/license-agpl--3.0-${badgeColor}" alt="license badge"`)
    case "GNU General Public License family" : return (`<img src="https://img.shields.io/badge/license-gpl-${badgeColor}" alt="license badge"`)
    case "GNU General Public License v2.0" : return (`<img src="https://img.shields.io/badge/license-gpl--2.0-${badgeColor}" alt="license badge"`)
    case "GNU General Public License v3.0" : return (`<img src="https://img.shields.io/badge/license-gpl--3.0-${badgeColor}" alt="license badge"`)
    case "GNU Lesser General Public License family" : return (`<img src="https://img.shields.io/badge/license-lgpl-${badgeColor}" alt="license badge"`)
    case "GNU Lesser General Public License v2.1" : return (`<img src="https://img.shields.io/badge/license-lgpl--2.1-${badgeColor}" alt="license badge"`)
    case "GNU Lesser General Public License v3.0" : return (`<img src="https://img.shields.io/badge/license-lgpl--3.0-${badgeColor}" alt="license badge"`)
    case "ISC" : return (`<img src="https://img.shields.io/badge/license-isc-${badgeColor}" alt="license badge"`)
    case "LaTeX Project Public License v1.3c" : return (`<img src="https://img.shields.io/badge/license-lppl--1.3c-${badgeColor}" alt="license badge"`)
    case "Microsoft Public License" : return (`<img src="https://img.shields.io/badge/license-ms--pl-${badgeColor}" alt="license badge"`)
    case "MIT" : return (`<img src="https://img.shields.io/badge/license-mit-${badgeColor}" alt="license badge"`)
    case "Mozilla Public License 2.0" : return (`<img src="https://img.shields.io/badge/license-mpl--2.0-${badgeColor}" alt="license badge"`)
    case "Open Software License 3.0" : return (`<img src="https://img.shields.io/badge/license-osl--3.0-${badgeColor}" alt="license badge"`)
    case "PostgreSQL License" : return (`<img src="https://img.shields.io/badge/license-postgresql-${badgeColor}" alt="license badge"`)
    case "SIL Open Font License 1.1" : return (`<img src="https://img.shields.io/badge/license-ofl--1.1-${badgeColor}" alt="license badge"`)
    case "University of Illinois/NCSA Open Source License" : return (`<img src="https://img.shields.io/badge/license-ncsa-${badgeColor}" alt="license badge"`)
    case "The Unlicense" : return (`<img src="https://img.shields.io/badge/license-unlicense-${badgeColor}" alt="license badge"`)
    case "zLib License" : return (`<img src="https://img.shields.io/badge/license-zlib-${badgeColor}" alt="license badge"`)
    default : return (`<img src="https://img.shields.io/badge/license-unknown-${badgeColor}" alt="license badge"`)
  } 
          
  //https://img.shields.io/badge/license-afl--3.0-lightgrey

   
//return `https://img.shields.io/badge/License--$(license}--green`)
//return `<img src="https://img.shields.io/badge/License-$(license}--green" alt="license badge"`)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license, data.badgeColor)}
## Description 

${data.projectDescription}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.license)}
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usageInstructions}

![alt text](assets/images/screenshot.png)

## Credits

${data.credits}

${renderLicenseSection(data.license)}
## Features

${data.features}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.developer}
${data.email}

`;
}

module.exports = generateMarkdown;
