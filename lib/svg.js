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

    setText(text, color, shapeType) {
        if (text.length > 3) {
            throw new Error("Max number of characters is 3.");
        }

        let x, y, fontSize;

        // Set x, y, and fontSize based on shapeType
        switch (shapeType) {
            case 'Circle':
                x = 100;
                y = 105;
                fontSize = 75;
                break;
            case 'Square':
                x = 110;
                y = 110;
                fontSize = 75;
                break;
            case 'Triangle':
                x = 110;
                y = 110;
                fontSize = 75;
                break;
            default:
                x = 0;
                y = 0;
                fontSize = 0;
        }

        // Returning values through variables in accordance to the shapeType
        this.renderedText = `<text x="${x}" y="${y}" font-size="${fontSize}" fill="${color}" text-anchor="middle" dominant-baseline="middle">
            ${text}
        </text>`;
    };
    
    setShape(shape) {
        this.renderedShape = shape.render();
    };
}

module.exports = SVG;