// import the required files (shapes classes found in shapes.js)
// test suite (contains multiple tests)
    // each shape class needs a test - triangle, square, circle
    // each chape color needs a test - red, blue, green
        // const shape = new Triangle();
        // shape.setColor('blue');
        // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// import shape classes
const {Triangle, Circle, Square} = require('./shapes.js')

// test for rendering triangle
describe('Triangle', () => {
    it("Upon successful completion, a blue triangle will be the rendered image", () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://w3.org/2000/svg\"><polygon points=\"150, 18 244, 182 56, 182\" fill=\"blue\"/><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"undefined\">undefined</text></svg>'
            )}
        )}
    )

// test for rendering circle
describe('Circle', () => {
    it("upon successful completion, a red circle will be the rendered image", () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(
            '<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://w3.org/2000/svg\"><circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"red\"/><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"undefined\">undefined</text></svg>'
            )}
        )}
    )