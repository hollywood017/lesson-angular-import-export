//app.ts
import { powerOf2, randomInteger } from './math';
//const powerOf2 = require ('./math.js');

console.log( powerOf2(50) );
console.log( powerOf2(17) );

console.log( 'RANDOM INTEGER');
console.log( randomInteger(17) );


// second way of doing imports
import * as mathThing from './math';
//const powerOf2 = require ('./math.js');

console.log( mathThing.powerOf2(50) );
console.log( mathThing.powerOf2(17) );

console.log( 'RANDOM INTEGER');
console.log( mathThing.randomInteger(17) );
