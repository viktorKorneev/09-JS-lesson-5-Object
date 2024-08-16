// let chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: "1957",
//     color: "red",
//     passengers: "2",
//     convertible: false,
//     mileage: 1021
// };

// chevy.needsWashing = true
// console.log(chevy);

// if (chevy.year < 1965) {
//     classic = true
// }

// for (let i = 0; i < chevy.passengers; i++){
//     addPersonToCar()
// }


let dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
}

let bark;
if(dog.weight > 20) {
    bark = "WOOF WOOF"
} else {
    bark = "woof woof"
}

let speak = `${dog.name} says ${bark} when he wants to ${dog.activity}`
console.log(speak);
