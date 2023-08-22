const inquirer = require('inquirer');

class SvgMaker {
  async logoPrompt() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'What text would you like to be entered for this logo (up to 3 characters max)?',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Can you please enter the color that you would like to utilize for your text?',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Which of these shapes would you like your logo to conform to?',
        choices: ['Triangle', 'Square', 'Circle'],
      },
    ]);
  }
}