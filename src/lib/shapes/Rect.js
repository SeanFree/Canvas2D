import RenderObject from '../RenderObject';
import Config from '../Config';

const RECT_DEFAULTS = {
    fill: true,
    stroke: false,
    width: 10,
    height: 10,
    color: {
        fill: "red",
        stroke: "none"
    },
};

class Rect extends RenderObject {
    constructor(x, y, options) {
        super(x, y);
        this.options = new Config(RECT_DEFAULTS);
        this.options.apply(options);
        this.options.apply({
            x: this.position.x,
            y: this.position.y
        });
    }
    draw(canvas2D) {
        canvas2D.rect(this.options);
    }
}

export default Cricle;