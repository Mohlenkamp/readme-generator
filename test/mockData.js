
const testData = data => {
    return (
      {
        developer: 'Wade Wilson',
        email: 'wade.wilson@waywardgirls.com',
        title: 'Negasonic-Teenage-Warhead',
        projectDescription: 'Pity the prom date that messes with her.\r\n' +
          '\r\n' +
          'Officia lorem ball tip deserunt leberkas biltong, corned beef boudin. Do eiusmod ham deserunt ham hock andouille dolore short ribs. Veniam prosciutto eu excepteur dolore et doner. Bresaola cupim filet mignon ground round enim dolore turkey qui incididunt in short loin. Fatback magna alcatra laboris meatloaf pariatur hamburger cupim tail pork loin. Sed short ribs laborum corned beef pork belly cow esse qui chicken in quis meatball prosciutto jowl aute.',
        githubName: 'cptDeadpool',
        gitHubLink: 'github.com/cptDeadpool/Negasonic-Teenage-Warhead',
        installation: "Install at your peril! Just make sure she's calm\r\n" +
          "and there's no bad guys around first.\r\n" +
          '\r\n' +
          'Short ribs dolor reprehenderit, tongue nisi brisket salami ullamco id duis elit cupidatat doner. Mollit beef burgdoggen capicola chuck dolor. Tongue ex meatball ullamco chislic frankfurter anim venison ribeye exercitation swine buffalo short ribs pastrami sint. Jowl dolore esse biltong filet mignon capicola. Flank proident veniam ham in, shank et jerky shankle duis pork belly \r\n' +
          'anim chislic occaecat filet mignon. Ullamco bacon buffalo tongue tempor hamburger est dolore jowl shankle mollit t-bone pancetta. Pastrami t-bone pork loin, esse cow magna pork belly minim salami deserunt eiusmod exercitation lorem',
        usageInstructions: 'Well, first... Get into a fire fight.\r\n' +
          'Then, turn off her cell phone.\r\n' +
          'Then, make her angry and stand back.\r\n' +
          '\r\n' +
          'Spicy jalapeno bacon ipsum dolor amet pork loin pig jerky, dolor pancetta minim bresaola buffalo reprehenderit ham hock flank. Corned beef tongue irure, cupim velit tail excepteur in ea ut hamburger. Flank ullamco beef nisi meatloaf occaecat buffalo meatball biltong id. Strip steak nulla doner qui labore beef ribs chuck drumstick picanha tongue bresaola exercitation dolore.', 
        confirmContributing: true,
        features: 'Rich Corinthian Leather',
        testing: "Make sure you've got the screenshot in the right directory and named correctly.\r\n" +
          "Don't forget to switch it back to asking questions instead of mock data\r\n" +
          "after you're done with testing.\r\n" +
          '\r\n' +
          'Officia lorem ball tip deserunt leberkas biltong, corned beef boudin. Do eiusmod ham deserunt ham hock andouille dolore short ribs. Veniam prosciutto eu excepteur dolore et doner. Bresaola cupim filet mignon ground round enim dolore turkey qui incididunt in short loin. Fatback magna alcatra laboris meatloaf pariatur hamburger cupim tail pork loin. Sed short ribs laborum corned beef pork belly cow esse qui chicken in quis meatball prosciutto jowl aute.',
        credits: 'Colossus \r\nWeasel\r\nAl\r\nVanessa',
        confirmLicense: true,
        license: [ 'Do What The F*ck You Want To Public License' ],
        badgeColor: [ 'red' ],
        confirmScreenshot: true,
        screenshotText: 'Artist rendering'
      });
}


const mock1 = 
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

module.exports = testData;