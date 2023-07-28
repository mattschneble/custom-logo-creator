// import shape classes
const { Triangle, Circle, Square } = require('./lib/shapes');
// import fs, inquirer and other npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// create an array of questions for a user to answer
// answers will be used to create a new svg logo
const shapeQuestions = [
    // ask user for text to be used in the logo
    {
        type: 'input',
        message: 'What text characters do you want (up to 3)?',
        name: 'text',
        // create validation to check for 3 or less characters
        validate: function (input) {
            if (input.length > 3) {
                return 'Please enter 3 or less characters';
            }
            return true;
        }
    },

    // ask user for text color
    {
        type: 'input',
        message: 'What color do you want the text to be?',
        name: 'textColor',
    },

    // ask user for shape to be used in the logo
    {
        type: 'list',
        message: 'What shape do you want for your logo?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },

    // ask user for shape color
    {
        type: 'input',
        message: 'What color do you want the shape to be?',
        name: 'shapeColor',
    }
]

// generate logo for the svg file
function generateLogo({ text, textColor, shape, shapeColor }) {
    // create a new variable to hold the blank new shape
    let newShape;

    // Triangle class
    if (shape == 'Triangle') {
        newShape = new Triangle(shapeColor, textColor, text);

    // Circle class
    } else if (shape === 'Circle') {
        newShape = new Circle(shapeColor, textColor, text);

    // Square class
    } else if (shape === 'Square') {
        newShape = new Square(shapeColor, textColor, text);
    }
    // return the render method for the new shape class
    return newShape.render();
}

// create a function to run the inquirer prompt
function init() {
    inquirer.prompt(shapeQuestions)
        .then((response) => {
            let newLogo = generateLogo(response);
            createOutputFile('./examples/customSVGhw.svg', newLogo, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File created successfully');
                }
            });
        });
}

// write the output file
function createOutputFile(outputName, newLogo) {
    fs.writeFile(outputName, newLogo, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created successfully');
        }
    }
    )
}

// call the init function
init();