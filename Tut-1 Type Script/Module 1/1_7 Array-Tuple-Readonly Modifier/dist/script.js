"use strict";
console.log("Hello World");
// Array
const arr = ["programming", 12, true];
const arrStr = ["programming", '1234'];
const arrStr2 = ["hero", "level-2"];
const arrNumber = [1, 25, 3, 2];
//TUPLE
// let dhakaLatLong = [23.8103, 90.4125];
// let dhakaLatLong:[number,number] = [23.8103, 90.4125];
// let dhakaLatLong:number[] = [23.8103, 90.4125];
// let dhakaLatLong:Array<FlatArray> = [23.8103, 90.4125];
// let dhakaLatLong: [number, number, number?] = [23.8103, 90.4125];
// let dhakaLatLong: [number, number, number | undefined] = [23.8103, 90.4125];
// dhakaLatLong.push(1232);
// for(let i=0; i<dhakaLatLong.length; i++){
//     console.log(dhakaLatLong[i]);
// }
// Readonly
// let dhakaLatLong:readonly[number,number] = [23.8103, 90.4125];
let dhakaLatLong = [23.8103, 90.4125];
// dhakaLatLong.push(1232); //can't do that
for (let i = 0; i < dhakaLatLong.length; i++) {
    console.log(dhakaLatLong[i]);
}
