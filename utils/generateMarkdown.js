// Create a function that returns a license badge based on which license is passed in

const licenseArray = require("./generateLicense.js");

// If there is no license, return an empty string
// I know I could just pass the data param in these functions, but it was
// easier for me to separate out and pass the boolean just to keep it clear in my head.
//
function renderLicenseBadge(isLicense, data) {
  if (!isLicense) {
    return ''
  }
  else {
    let message = ""
    let badgeColor = data.badgeColor[0]
    let license = data.license[0]
    let returnString = "<img src=\"https://img.shields.io/static/v1?label=license&message="
    if (!badgeColor) { badgeColor = "9cf" } //default color if none chosen
    switch (license) {
      case "Academic Free License v3.0": { message = "afl-3.0"; break; }
      case "Apache license 2.0": { message = "apache-2.0"; break; }
      case "Artistic license 2.0": { message = "artistic-2.0"; break; }
      case "Boost Software License 1.0": { message = "bsl-1.0-2.0"; break; }
      case "BSD 2-clause Simplified license": { message = "bsd-2-clause"; break; }
      case "BSD 3-clause New or Revised license": { message = "bsd-3-clause"; break; }
      case "BSD 3-clause Clear license": { message = "bsd-3-clause-clear"; break; }
      case "Creative Commons license family": { message = "cc"; break; }
      case "Creative Commons Zero v1.0 Universal": { message = "cc0-1.0"; break; }
      case "Creative Commons Attribution 4.0": { message = "cc-by-4.0"; break; }
      case "Creative Commons Attribution Share Alike 4.0": { message = "cc-by-sa-4.0"; break; }
      case "Do What The F*ck You Want To Public License": { message = "wtfpl"; break; }
      case "Educational Community License v2.0": { message = "ecl-2.0"; break; }
      case "Eclipse Public License 1.0": { message = "epl-1.0"; break; }
      case "Eclipse Public License 2.0": { message = "epl-2.0"; break; }
      case "European Union Public License 1.1": { message = "eupl-1.1"; break; }
      case "GNU Affero General Public License v3.0": { message = "agpl-3.0"; break; }
      case "GNU General Public License family": { message = "gpl"; break; }
      case "GNU General Public License v2.0": { message = "gpl-2.0"; break; }
      case "GNU General Public License v3.0": { message = "gpl-3.0"; break; }
      case "GNU Lesser General Public License family": { message = "lgpl"; break; }
      case "GNU Lesser General Public License v2.1": { message = "lgpl-2.1"; break; }
      case "GNU Lesser General Public License v3.0": { message = "lgpl-3.0"; break; }
      case "ISC": { message = "isc"; break; }
      case "LaTeX Project Public License v1.3c": { message = "lppl-1.3c"; break; }
      case "Microsoft Public License": { message = "ms-pl"; break; }
      case "MIT": { message = "mit"; break; }
      case "Mozilla Public License 2.0": { message = "mpl-2.0"; break; }
      case "Open Software License 3.0": { message = "osl-3.0"; break; }
      case "PostgreSQL License": { message = "postgresql"; break; }
      case "SIL Open Font License 1.1": { message = "ofl-1.1"; break; }
      case "University of Illinois/NCSA Open Source License": { message = "ncsa"; break; }
      case "The Unlicense": { message = "unlicense"; break; }
      case "zLib License": { message = "zlib"; break; }
      default: { message = "unknown" }
    }
    returnString = returnString + message + "&color=" + badgeColor + "\" alt=\"" + license + "license badge\"/>"
    return returnString
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(isLicense) {
  return (!isLicense ? '' : '* [License](#license)')
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
// Same issue with just keeping it clear in my head

function renderLicenseSection(isLicense, data) {
  return (!isLicense ? '' :
    `## License 
  
  This project is licensed under the terms of the ${data.license} agreement. `)
}

// I decided that there should be a default Contributor covenant, so I put this in.
// I also thought the badge made more sense down in this section since it only
// pertained to contributions... 
function renderContributingSection(isDefault,data) {
  if (!isDefault){
    return (data.contributing)
   }else{ return (
    `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

  Contributions to this project are governed by the Contributor Covenant v2.0 which can be viewed
  at https://www.contributor-covenant.org/ . `)
}
}
// This time I just passed the data param to show I knew how
function renderScreenshotLink(data) {
  if (data.confirmScreenshot){
    return `![${data.screenshotText}](../src/screenshot.jpg)`
  }else{
    return ''
  }
}


// Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
# ${data.title}

${renderLicenseBadge(data.confirmLicense, data)}

## Description 

${data.projectDescription}

${renderScreenshotLink(data)}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.confirmLicense)}
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usageInstructions}

## Credits

${data.credits}

${renderLicenseSection(data.confirmLicense, data)}
## Features

${data.features}

## Contributing

${renderContributingSection(data.confirmContributing, data)}

## Tests

${data.testing}

## Questions

Thank you for your interest in my project. If you have any questions or need to reach me,
I am ***${data.developer}*** with a GitHub username of ***${data.githubName}***. You can also send me an 
email (preferred) at ***${data.email}***, and I will respond as soon as I can.

`;
}

module.exports = generateMarkdown;
