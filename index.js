const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes')
const SVG = require('./lib/svg')

class svgMaker {
  async run({ text, textColor, shape, shapeColor }) {
      try {
  
        let shapeInstance;
  
        // Step 1: Determine the shape type
        switch (shape) {
          case 'Circle':
              // Create a Circle instance
            shapeInstance = new Circle(); 
            break;
          case 'Square':
              // Create a Square instance
            shapeInstance = new Square();
            break;
          default:
              // Create a Triangle instance
            shapeInstance = new Triangle(); 
            break;
        }
  
        // Step 2: Set the color of the shape
        shapeInstance.setShapeColor(shapeColor);
  
        // Step 3: Create an SVG container
        const svg = new SVG();
  
        // Step 4: Set the text and text color in the SVG container & pass the shape type
        svg.setText(text, textColor, shape);
  
        // Step 5: Set the shape in the SVG container
        svg.setShape(shapeInstance);
  
        // Step 6: Generate the SVG data by rendering the SVG container
        const svgData = svg.render();
  
        // Step 7: Write the SVG data to a file named "logo.svg" within the "examples" folder
          // Path into the examples folder
        const filePath = 'examples/logo.svg'; 
        fs.writeFileSync(filePath, svgData);

        // Step 8: Log a success message
        console.log(`Generated ${filePath}`);
        
        // Step 9: Handle any errors that occur during the process
      } catch (error) {
        console.error(error);
        console.log('Oops! Something went wrong.');
      }
    }
};

function logoPrompt() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'text',
        message: 'What text would you like to be entered for this logo(up to 3 characters max)?',
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'Can you please enter the color that you would like to utilize for your text(hexadecimal numbers are accepted as well)?',
        },
        {
        type: 'list',
        name: 'shape',
        message: 'Which of these shapes would you like your logo to conform to?',
        choices: ['Triangle', 'Square', 'Circle'],
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'In regards to the decided shape, would you please pick a color(hexadecimal numbers are accepted as well)?',
        },
      ]);
      
    };
    
(async () => {
  try {
      const res = await logoPrompt();
      console.log(res);
      
      const svgMakerInstance = new svgMaker();
      await svgMakerInstance.run(res);
  } catch (error) {
      console.error(error);
  }
})();