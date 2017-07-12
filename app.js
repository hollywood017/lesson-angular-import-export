"use strict";
exports.__esModule = true;
//app.ts
var math_1 = require("./math");
//const powerOf2 = require ('./math.js');
console.log(math_1.powerOf2(50));
console.log(math_1.powerOf2(17));
console.log('RANDOM INTEGER');
console.log(math_1.randomInteger(17));
// second way of doing imports
var mathThing = require("./math");
//const powerOf2 = require ('./math.js');
console.log(mathThing.powerOf2(50));
console.log(mathThing.powerOf2(17));
console.log('RANDOM INTEGER');
console.log(mathThing.randomInteger(17));
