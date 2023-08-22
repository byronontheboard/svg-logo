class svg {
    constructor() {
        this.renderedText = '';
        this.renderedTextColor = '';
        this.renderedShapeColor = '';
    }

    setText(renderedText) {
        this.renderedText = renderedText;
    };

    setTextColor(renderedTextColor) {
        this.text = renderedTextColor;
    };
    
    setShapeColor(renderedShapeColor) {
        this.text = renderedShapeColor;
    };
    
    render() {
      return `<svg version="1.1" width="300" height="200">
      ${this.renderedText}
      ${this.renderedTextColor}
      ${this.renderedShapeColor}
      </svg>`;
    }
}