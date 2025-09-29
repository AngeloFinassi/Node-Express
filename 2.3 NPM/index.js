//var generateName = require('sillyname');
//the same thing as up but for the newest version
//Default import -> exported One main thing
import generateName from "sillyname"

//Named Import -> exported many main things
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
var sp = randomSuperhero();

console.log(`My name is ${sillyName}`)
console.log(`I'm the ${sp}`)