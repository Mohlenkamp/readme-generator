// TODO: Include packages needed for this application
const fs = require('fs')  // File system 
const inquirer = require('inquirer'); // Inquirer package
const licenseArray = require('./utils/generateLicense.js');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } = require('./utils/generateMarkdown.js'); // Utility file

const mockData = 
{
  developer: 'John Doe',
  email: 'john.doe@gmail.com',
  title: 'Generic Project Name',
  projectDescription: 'This is a project description that I am putting in for demonstration purposes.\r\n' +
    "It can be as long as you need. I'm going to use some lorem ipsum now to make it longer.\r\n" +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.\r\n' +
    '\r\n' +
    'Short ribs dolor reprehenderit, tongue nisi brisket salami ullamco id duis elit cupidatat doner. Mollit beef burgdoggen capicola chuck dolor. Tongue ex meatball ullamco chislic frankfurter anim venison ribeye exercitation swine buffalo short ribs pastrami sint. Jowl dolore esse biltong filet mignon capicola. Flank proident veniam ham in, shank et jerky shankle duis pork belly \r\n' +
    'anim chislic occaecat filet mignon. Ullamco bacon buffalo tongue tempor hamburger est dolore jowl shankle mollit t-bone pancetta. Pastrami t-bone pork loin, esse cow magna pork belly minim salami deserunt eiusmod exercitation lorem.\r\n' +
    '\r\n' +
    'Officia lorem ball tip deserunt leberkas biltong, corned beef boudin. Do eiusmod ham deserunt ham hock andouille dolore short ribs. Veniam prosciutto eu excepteur dolore et doner. Bresaola cupim filet mignon ground round enim dolore turkey qui incididunt in short loin. Fatback magna alcatra laboris meatloaf pariatur hamburger cupim tail pork loin. Sed short ribs laborum corned beef pork belly cow esse qui chicken in quis meatball prosciutto jowl aute.',
  githubName: 'johndoeGit',
  gitHubLink: 'johndoeGit@github.com',
  installation: 'This is used to put in any specific instructions you may want.\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.\r\n' +
    '\r\n' +
    'Short ribs dolor reprehenderit, tongue nisi brisket salami ullamco id duis elit cupidatat doner. Mollit beef burgdoggen capicola chuck dolor. Tongue ex meatball ullamco chislic frankfurter anim venison ribeye exercitation swine buffalo short ribs pastrami sint. Jowl dolore esse biltong filet mignon capicola. Flank proident veniam ham in, shank et jerky shankle duis pork belly \r\n' +
    'anim chislic occaecat filet mignon. Ullamco bacon buffalo tongue tempor hamburger est dolore jowl shankle mollit t-bone pancetta. Pastrami t-bone pork loin, esse cow magna pork belly minim salami deserunt eiusmod exercitation lorem.\r\n' +
    '\r\n' +
    'Officia lorem ball tip deserunt leberkas biltong, corned beef boudin. Do eiusmod ham deserunt ham hock andouille dolore short ribs. Veniam prosciutto eu excepteur dolore et doner. Bresaola cupim filet mignon ground round enim dolore turkey qui incididunt in short loin. Fatback magna alcatra laboris meatloaf pariatur hamburger cupim tail pork loin. Sed short ribs laborum corned beef pork belly cow esse qui chicken in quis meatball prosciutto jowl aute.',
  confirmUsage: true,
  usageInstructions: 'none',
  confirmLicense: true,
  license: [ 'Do What The F*ck You Want To Public License' ],
  badgeColor: [ 'blueviolet' ]
}


// TODO: Create an array of questions for user input
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
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Does you have any usage instructions or screenshots?',
    default: false
  },
  {
    type: 'Editor',
    name: 'usageInstructions',
    message: 'What are your usage instructions (Use Editor)?',
    when: ({ confirmUsage }) => confirmUsage
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
  }
];

// TODO: Create a function to write README file
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

// TODO: Create a function to initialize app
//function init() {}

function init() {
  inquirer.prompt(questions)
      .then(function (data) {
        console.log(data)
        console.log(data.developer)
        console.log(data.title)
      })
  }

// .then(askAboutMock => {console.log("Mock data use: " + askAboutMock)
//   return askQuestions();
// })
// .then(askQuestions
// .then(portfolioData => {
//   return generatePage(portfolioData);
// })
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse);
//   return copyFile();
// })
// .then(copyFileResponse => {
//   console.log(copyFileResponse);
// })


// Function call to initialize app
init();
