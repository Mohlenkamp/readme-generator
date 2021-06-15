// TODO: Include packages needed for this application
const fs = require('fs')  // File system 
const inquirer = require('inquirer'); // Inquirer package
const licenseArray = require('./utils/generateLicense.js');
const generateMarkdown = require('./utils/generateMarkdown.js'); // Utility file
const testData = require('./test/mockData.js')

const mockdata2 = 
{
  developer: 'Captain Deadpool',
  email: 'cpt.deadpool@gmail.com',
  title: 'Negasonic-Teenage-Warhead',
  projectDescription: 'Pity the prom date that messes with her...\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef \r\n' +
    'nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.',
  githubName: 'cptDeadpool',
  gitHubLink: 'github.com/cptDeadpool/Negasonic-Teenage-Warhead',
  installation: 'Only install this BEFORE you go into a fight.\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef \r\n' +
    'nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.',
  usageInstructions: 'Only use it when the bad guys are right behind the truck,\r\n' +
    'or you need to get up to the flight deck.\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef \r\n' +
    'nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.',
  confirmContributing: true,
  features: 'Rich corinthian leather',
  testing: 'Only test this at the Applebees in Jacksonville.\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef \r\n' +
    'nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.',
  credits: 'An overpaid tool....\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef \r\n' +
    'nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.',
  confirmLicense: true,
  license: [ 'Do What The F*ck You Want To Public License' ],
  badgeColor: [ 'red' ]
}


const mockData = 
{
  developer: 'Jane Doe',
  email: 'jane.doe@gmail.com',
  title: 'Negasonic Teenage Warhead',
  projectDescription: "This is a sample project description. We'll put in some lorem ipsum to simulate more text.\r\n" +        
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.\r\n' +
    '\r\n' +
    'Short ribs dolor reprehenderit, tongue nisi brisket salami ullamco id duis elit cupidatat doner. Mollit beef burgdoggen capicola chuck dolor. Tongue ex meatball ullamco chislic frankfurter anim venison ribeye exercitation swine buffalo short ribs pastrami sint. Jowl dolore esse biltong filet mignon capicola. Flank proident veniam ham in, shank et jerky shankle duis pork belly \r\n' +
    'anim chislic occaecat filet mignon. Ullamco bacon buffalo tongue tempor hamburger est dolore jowl shankle mollit t-bone pancetta. Pastrami t-bone pork loin, esse cow magna pork belly minim salami deserunt eiusmod exercitation lorem.',
  githubName: 'DoeADeer',
  gitHubLink: 'github.com/DoeADeer/Negasonic-Teenage-Warhead',
  installation: 'Install this and then wait for the explosions....\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.\r\n' +
    '\r\n' +
    'Short ribs dolor reprehenderit, tongue nisi brisket salami ullamco id duis elit cupidatat doner. Mollit beef burgdoggen capicola chuck dolor. Tongue ex meatball ullamco chislic frankfurter anim venison ribeye exercitation swine buffalo short ribs pastrami sint. Jowl dolore esse biltong filet mignon capicola. Flank proident veniam ham in, shank et jerky shankle duis pork belly \r\n' +
    'anim chislic occaecat filet mignon. Ullamco bacon buffalo tongue tempor hamburger est dolore jowl shankle mollit t-bone pancetta. Pastrami t-bone pork loin, esse cow magna pork belly minim salami deserunt eiusmod exercitation lorem.',
  usageInstructions: 'Use whenever you want to make a big mess.\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.\r\n' +
    '\r\n' +
    'Short ribs dolor reprehenderit, tongue nisi brisket salami ullamco id duis elit cupidatat doner. Mollit beef burgdoggen capicola chuck dolor. Tongue ex meatball ullamco chislic frankfurter anim venison ribeye exercitation swine buffalo short ribs pastrami sint. Jowl dolore esse biltong filet mignon capicola. Flank proident veniam ham in, shank et jerky shankle duis pork belly \r\n' +
    'anim chislic occaecat filet mignon. Ullamco bacon buffalo tongue tempor hamburger est dolore jowl shankle mollit t-bone pancetta. Pastrami t-bone pork loin, esse cow magna pork belly minim salami deserunt eiusmod exercitation lorem.',
  confirmContributing: true,
  testing: 'Test by making it angry and then back up.\r\n' +
    '\r\n' +
    'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.\r\n' +
    '\r\n' +
    'Short ribs dolor reprehenderit, tongue nisi brisket salami ullamco id duis elit cupidatat doner. Mollit beef burgdoggen capicola chuck dolor. Tongue ex meatball ullamco chislic frankfurter anim venison ribeye exercitation swine buffalo short ribs pastrami sint. Jowl dolore esse biltong filet mignon capicola. Flank proident veniam ham in, shank et jerky shankle duis pork belly \r\n' +
    'anim chislic occaecat filet mignon. Ullamco bacon buffalo tongue tempor hamburger est dolore jowl shankle mollit t-bone pancetta. Pastrami t-bone pork loin, esse cow magna pork belly minim salami deserunt eiusmod exercitation lorem.',
  confirmLicense: true,
  license: [ 'Do What The F*ck You Want To Public License' ],
  badgeColor: [ 'yellow' ]
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
  // inquirer.prompt(questions)
  //     .then(function (data) {
  //       console.log(data);
  //      return writeToFile(generateMarkdown(data));
  // })

  // Testing section - You can use this to supply mock data from /test instead of manually entering
   let data = testData()
   writeToFile(generateMarkdown(data));
  // End of testing section

    }

// Function call to initialize app
init();
