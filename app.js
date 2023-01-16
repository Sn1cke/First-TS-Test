"use strict";
const arr = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arr);
const newChar = {
    name: "Benny",
    age: 47,
    superhero: true,
};
console.log(newChar);
const greeting = function (name) {
    return console.log(`Hello ${name}`);
};
greeting("Snicke");
arr.forEach(x => greeting(x));
