"use strict";
exports.__esModule = true;
//math.ts
//must return a number
//          |
function powerOf2(x) {
    if (x === void 0) { x = 0; }
    //                              |
    //if no "x" is provided, "x" is 0.
    return x * x;
}
exports.powerOf2 = powerOf2;
//module.exports = powerOf2;
function randomInteger(max) {
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * max);
}
exports.randomInteger = randomInteger;
