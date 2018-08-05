class Color {
    constructor(type, value) {
        switch(type) {
            case 'rgb':
        }
    }
    get rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    get rgba() {
        return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
    get hsl() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    }
    get hsla() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
    }
}