// Base class for shapes
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
    }
  }
  class Square extends Shape {
    render() {
      return `<rect x="10" y="10" width="30" height="30"/> fill="${this.color}" />`;
    }
  }
  class Triangle extends Shape {
    render() {
        // Figure out how to write code for a SVG Triangle/Polygon?
      return `<triangle ________ fill="${this.color}" />`;
    }
  }