const { Circle, Square, Triangle } = require('./shapes');

// Circle
describe('Circle', () => {
    test('Renders a circle with the correct color.', () => {
        const circle = new Circle();
        circle.setShapeColor('blue');
        const rendered = circle.render();
        expect(rendered).toContain('<circle');
        expect(rendered).toContain('fill="blue"');
    });
});

// Square
describe('Square', () => {
    test('Renders a square with the correct color.', () => {
        const square = new Square();
        square.setShapeColor('red');
        const rendered = square.render();
        expect(rendered).toContain('<rect');
        expect(rendered).toContain('fill="red"');
    });
});

// Triangle
describe('Triangle', () => {
    test('Renders a triangle with the correct color.', () => {
        const triangle = new Triangle();
        triangle.setShapeColor('green');
        const rendered = triangle.render();
        expect(rendered).toContain('<polygon');
        expect(rendered).toContain('fill="green"');
    });
});