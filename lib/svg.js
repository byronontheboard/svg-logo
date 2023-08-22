class SVG {
    constructor() {
        this.renderedText = '';
        this.renderedShape = '';
    }

    setText(text, color) {
        this.renderedText = `<text x="0" y="15" fill="
        ${color}">
            ${text}
        </text>`;
    };
    
    setShape(shape) {
        this.renderedShape = shape.render();
    };
    
    render() {
      return `<svg version="1.1" width="300" height="200" 
      xmlns="http://www.w3.org/2000/svg">
      ${this.renderShape}
      ${this.renderText}
      </svg>`;
    }
}

module.exports = SVG;