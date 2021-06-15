// John Mohlenkamp
// Assignment 9: Readme Generator
// June 15, 2021

//Include packages needed for this application
const fs = require('fs')  // File system 
const inquirer = require('inquirer'); // Inquirer package
const licenseArray = require('./utils/generateLicense.js');
const generateMarkdown = require('./utils/generateMarkdown.js'); // Utility file
const testData = require('./test/mockData.js') //Mock data for testing -- see init function for instructions

//Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'developer',
    message: 'What is your name? (Required)',
    validate: developerName => {
      if (developerName) {
        return true;
      } else {
        console.log('You need to enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: developerEmail => {
      if (developerEmail) {
        return true;
      } else {
        console.log('You need to enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project? (Required)',
    validate: projectName => {
      if (projectName) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    }
  },
  {
    type: 'editor',
    name: 'projectDescription',
    message: 'Provide a description of the project (Required/Use Editor)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'githubName',
    message: 'What is your GitHub user name? (Required)',
    validate: developerName => {
      if (developerName) {
        return true;
      } else {
        console.log('You need to enter your user name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'gitHubLink',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: linkInput => {
      if (linkInput) {
        return true;
      } else {
        console.log('You need to enter a project GitHub link!');
        return false;
      }
    }
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Provide any specific installation instructions (Required/Use Editor)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('You need to enter some installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'editor',
    name: 'usageInstructions',
    message: 'What are your usage instructions (Use Editor)?'
  },
  {
    type: 'confirm',
    name: 'confirmContributing',
    message: 'Use default contribution instructions?',
    default: true
  },
  {
    type: 'editor',
    name: 'contributing',
    message: 'What are your contribution instructions (Use Editor)?',
    when: ({ confirmContributing }) => !confirmContributing
  },
  {
    type: 'input',
    name: 'features',
    message: 'Are there any key features you want to briefly mention?',
    default: "None"
  },
  {
    type: 'editor',
    name: 'testing',
    message: 'What are your testing instructions (Use Editor)?'
  },
  {
    type: 'editor',
    name: 'credits',
    message: 'Did you have any collaborators or contributors to the project (Use Editor)?'
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Does your project have a license associated with it?',
    default: false
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What license is associated with this project? (Check ONLY one)',
    choices: licenseArray,
    when: ({ confirmLicense }) => confirmLicense
  },
  {
    type: 'checkbox',
    name: 'badgeColor',
    message: 'Choose your badge color please(Check ONLY one)',
    choices: ['brightgreen','green','yellowgreen','yellow','orange','red','blue','lightgrey','blueviolet','ff69b4','9cf'],
    default: 'lightgrey',
    when: ({ confirmLicense }) => confirmLicense
  },
  {
    type: 'confirm',
    name: 'confirmScreenshot',
    message: 'Do you want to include a screenshot?',
    default: false
  },
  {
    type: 'confirm',
    name: 'confirmScreenshot',
    message: 'Do you want to include a screenshot?',
    default: false
  },
  {
    type: 'input',
    name: 'screenshotText',
    message: 'Save your markdown compatible JPG screenshot in the \src directory as screenshot.jpg, and type in your alt text here',
    default: "Screenshot",
    when: ({ confirmScreenshot }) => confirmScreenshot
  }
  
];

//Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README.md file created'
      });
    });
  });
};

//Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(function (data) {
        console.log(data);
       return writeToFile(generateMarkdown(data));
  })

  // Testing section - You can use this to supply mock data from /test instead of manually entering
  // The sample screenshot ntw.jpg should be copied to /src and named screenshot.jpg to work properly.

  //  let data = testData()
  //  writeToFile(generateMarkdown(data));
  
  // End of testing section

    }

// Function call to initialize app
init();
