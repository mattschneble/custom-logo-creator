//create a parent 'Shapes' class (June's idea during pseudocoding)
class Shapes {
    // Each shape class should have a setColor method created
    setColor(fillColor) {
        this.fillColor = fillColor;
    }
}


//create 'Triangle', 'Circle' and 'Square' classes that extend the 'Shapes' class AND have their own render method.
class Triangle extends Shapes {
    render() {
        return `<polygon xmlns="http://www.w3.org/2000/svg" points="150,20 225,150 75,150" fill=${this.fillColor}>`;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill=${this.fillColor}>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect xmlns="http://www.w3.org/2000/svg" x="50" y="20" width="100" height="100" fill=${this.fillColor}>`;
    }
}

//exports 'Triangle', 'Circle' and 'Square' classes
module.exports = {};