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


// let dog = {
//     name: "Fido",
//     weight: 20.2,
//     age: 4,
//     breed: "mixed",
//     activity: "fetch balls"
// }

// let bark;
// if(dog.weight > 20) {
//     bark = "WOOF WOOF"
// } else {
//     bark = "woof woof"
// }

// let speak = `${dog.name} says ${bark} when he wants to ${dog.activity}`
// console.log(speak);

// dog.fidoYears = 35;
// delete dog.fidoYears
// console.log(dog);



let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
}

function prequal (car) {
    if (car.mileage > 10000) {
        return false
    } else if (car.year > 1960) {
        return false
    }
    return true
}

let worthALook = prequal(taxi);

if(worthALook) {
    console.log(`You gotta check out this ${taxi.make} ${taxi.model}`);
    } else {
        console.log(`You should really pass on the ${taxi.make} ${taxi.model}`);
        
    } 

