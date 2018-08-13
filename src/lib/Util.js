export const { sqrt, pow, cos, sin, acos, atan, atan2, random } = Math;
export const abs = n => n > 0 ? n : -n;
export const floor = n => ~~n;
export const distance = (x1, y1, x2, y2) => sqrt(pow(x2 - x1) + pow(y2 - y1));
export const angle = (x, y) => atan2(y, x);
export const rand = n => n * random();
export const randRange = n => n - rand(2 * n);
export const fadeIn = (t, m) => t / m;
export const fadeOut = (t, m) => (m - t) / m;
export const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return abs((t + hm) % m - hm) / hm
};
export default {
    sqrt,
    pow,
    cos,
    sin,
    acos,
    atan,
    atan2,
    abs,
    floor,
    distance,
    angle,
    rand,
    randRange,
    fadeIn,
    fadeOut,
    fadeInOut
};