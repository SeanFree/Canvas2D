import RenderObject from '../RenderObject';
import Config from '../Config';
import { TAU } from '../Constants';

const CIRCLE_DEFAULTS = {
    fill: true,
    stroke: false,
    radius: 5,
    start: 0,
    end: TAU,
    color: {
        fill: "red",
        stroke: null
    }
};

class Circle extends RenderObject {
    constructor(x, y, options) {
        super(x, y);
        this.options = new Config(CIRCLE_DEFAULTS);
        this.options.apply(options);
        this.options.apply({
            x: this.position.x,
            y: this.position.y
        });
    }
    draw(canvas2D) {
        canvas2D.arc(this.options);
    }
};

export default Circle;