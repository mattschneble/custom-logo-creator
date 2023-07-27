//create a parent 'Shapes' class (June's idea during pseudocoding)
class ParentShapes {
    // Each shape class should have a setColor method created
    constructor(fillColor, textColor, text, shape) {
        this.fillColor = fillColor;
        this.textColor = textColor;
        this.text = text;
        this.shape = shape;
    };
    //create a setColor method for the 'Shapes' class
    setColor(color) {
        this.fillColor = color;
    }
}


//create 'Triangle', 'Circle' and 'Square' classes that extend the 'Shapes' class AND have their own render method.
    //render method should return a string with the HTML tag, fillColor and text included

//create a 'Triangle' class that extends the 'ParentShapes' class
class Triangle extends ParentShapes {
    constructor(fillColor, textColor, text) {
        super(fillColor, textColor, text);
        this.shape = 'triangle';
    }
    //create a render method for the 'Triangle' class (use polygon tag)
    render() {
        return `<polygon points="150,20 225,150 75,150" fill=${this.fillColor}>`;
    }
}

//create a 'Circle' class that extends the 'Shapes' class
class Circle extends ParentShapes {
    constructor(fillColor, textColor, text) {
        super(fillColor, textColor, text);
        this.shape = 'circle';
    }
    //create a render method for the 'Circle' class (use circle tag)
    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.fillColor}>`;
    }
}

//create a 'Square' class that extends the 'Shapes' class
class Square extends ParentShapes {
    constructor(fillColor, textColor, text) {
        super(fillColor, textColor, text);
        this.shape = 'square';
    }
    //create a render method for the 'Square' class (use rect tag)
    render() {
        return `<rect x="50" y="20" width="100" height="100" fill=${this.fillColor}>`;
    }
}

//exports 'Triangle', 'Circle' and 'Square' classes
module.exports = {
    Triangle,
    Circle,
    Square
};