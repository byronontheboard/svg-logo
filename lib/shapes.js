// Base class for shapes
class Shape {
    constructor() {
        this.color = "";
        this.textColor = "";
    }

    setShapeColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="90" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="200" height="200" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="110,10 210,180 10,180" fill="${this.color}"/>`
    }
}

module.exports = { Circle, Triangle, Square }