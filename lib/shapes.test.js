// import shape classes
const {Triangle, Circle, Square} = require('./shapes.js')

// test for rendering triangle
describe('Triangle', () => {
    it("Upon successful completion, a blue triangle will be the rendered image", () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"150, 18 244, 182 56, 182\" fill=\"blue\"/><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"undefined\">undefined</text></svg>'
            )}
        )}
    )

// test for rendering circle
describe('Circle', () => {
    it("upon successful completion, a red circle will be the rendered image", () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(
            '<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"100\" r=\"80\" fill=\"red\"/><text x=\"150\" y=\"120\"text-anchor=\"middle\" fill=\"undefined\">undefined</text></svg>'
            )}
        )}
    )

// test for rendering square
describe('Square', () => {
    it("upon successful completion, a green square will be the rendered image", () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            '<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x="100" y="70" width="100" height="100" fill=\"green\"/><text x=\"150\" y=\"120\" text-anchor=\"middle\" fill=\"undefined\">undefined</text></svg>'
        )
    })
})