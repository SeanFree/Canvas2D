import { pow } from './Util';

export const { PI } = Math;
export const HALF_PI = 0.5 * PI;
export const TAU = 2 * PI;
export const TO_DEG = 180 / PI;
export const TO_RAD = PI / 180;
export const G = 6.67 * pow(10, -11);
export const EPSILON = 2.220446049250313e-16;
export default {
  PI,
  HALF_PI,
  TAU,
  TO_DEG,
  TO_RAD,
  G,
  EPSILON
}