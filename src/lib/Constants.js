export const { sqrt, pow, cos, sin, acos, atan, atan2, PI, random } = Math;
export const rand = n => n * random();
export const randRange = n => n - rand(2 * n);
export const fadeIn = (t, m) => t / m;
export const fadeOut = (t, m) => (m - t) / m;
export const fadeInOut = (t, m) => abs((t + 0.5 * m) % m - 0.5 * m) / (0.5 * m);
export const abs = n => n > 0 ? n : -n;
export const floor = n => ~~n;
export const HALF_PI = 0.5 * PI;
export const TAU = 2 * PI;
export const TO_DEG = 180 / PI;
export const TO_RAD = PI / 180;
export const G = 6.67 * pow(10, -11);
export const EPSILON = 2.220446049250313e-16;
export default {
  sqrt,
  pow,
  cos,
  sin,
  acos,
  atan,
  atan2,
  PI,
  random,
  rand,
  randRange,
  fadeIn,
  fadeOut,
  fadeInOut,
  abs,
  floor,
  HALF_PI,
  TAU,
  TO_DEG,
  TO_RAD,
  G,
  EPSILON
}