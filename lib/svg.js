class SVG {
    constructor() {
        this.renderedText = "";
        this.renderedShape = "";
    }
    render() {
        return `<svg version="1.1" width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">
            ${this.renderedShape}
            ${this.renderedText}
        </svg>`;
    }

    setText(text, color) {
        if (message.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.renderedText = `<text x="0" y="15" fill="${color}">
            ${text}
        </text>`;
    };
    
    setShape(shape) {
        this.renderedShape = shape.render();
    };
}

module.exports = SVG;