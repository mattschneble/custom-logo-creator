// import shape classes
const { Triangle, Circle, Square } = require('./lib/shapes');
// import fs, inquirer and other npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// ask inquirer questions using prompt (must be run BEFORE generate content and write file - CANNOT PROGRESS UNTIL COMPLETION)
    // what text characters do you want (up to 3) (edge case for more than 3?)
    // text color (keyword or hexidecimal) (edge case for entering non-color?)
    // list of shapes (circle, triangle, square - multiple choice DO NOT USE LIST)
    // shape color (keyword or hexidecimal) (edge case for entering non-color? possibly use jest?)

const shapeQuestions = [
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

    {
        type: 'input',
        message: 'What color do you want the text to be?',
        name: 'textColor',
    },

    {
        type: 'list',
        message: 'What shape do you want for your logo?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },

    {
        type: 'input',
        message: 'What color do you want the shape to be?',
        name: 'shapeColor',
    }
]

// generate content of the svg file
    // generate svg tag
    // generate svg shape
    // generate text
    // create one string with the above information

// write the output file

function createText(fillColor, text) {
    // return string with HTML tag, fillColor and text included

}

const data = `
<svg info>
<shape info>
<text info>
</svg>`

fs.writeFile("customSVGhw.svg", data, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});