//const name = 'yoshi';

//console.log(name);

//const greet = (name) => {
//    console.log(`hello, ${name}`)
//}

//greet('mario');
//greet('yoshi');
//Window is browsers presense is implies
//global object is global
//console.log(global);

/*setTimeout(() => {
    console.log('in the timewoit')
    clearInterval(int);
}, 3000);

const int = setInterval(()=>{
    console.log('in the interval');
},1000);*/

//console.log(__dirname);
//console.log(__filename);
const {people, ages} = require('./people');
//console.log(people, ages);

const os = require('os');

console.log(os.platform(),os.homedir())