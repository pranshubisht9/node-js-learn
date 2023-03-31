// import {x} from './app' this cant work

const app = require('./app')

console.log(app);

const arr = [2,4,7,1,3,8,3];
let res = arr.filter((item)=> {
 return (item == 3);
})

console.log(res);