const arr: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"]
console.log(arr);

type HeroFinder = {
    name: string,
    age: number,
    superhero: boolean,
}

const newChar: HeroFinder = {
    name: "Benny",
    age: 47,
    superhero: true,
}
console.log(newChar);

const greeting = function (name: string) {
    return console.log(`Hello ${name}`);
}
greeting("Snicke");

arr.forEach(x => greeting(x));