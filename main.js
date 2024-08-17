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

// let fido = {
//     name: "Fido",
//     weight: 20.2,
//     age: 4,
//     breed: "mixed",
//     activity: "fetch balls"
// }
// loseWeight(fido, 10)
// function loseWeight (dog, amount) {
//     dog.weight = dog.weight - amount;

// }
// alert(`${fido.name} now weighs ${fido.weight}`);

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

// let taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
// }

// function prequal (car) {
//     if (car.mileage > 10000) {
//         return false
//     } else if (car.year > 1960) {
//         return false
//     }
//     return true
// }

// let worthALook = prequal(taxi);

// if(worthALook) {
//     console.log(`You gotta check out this ${taxi.make} ${taxi.model}`);
//     } else {
//         console.log(`You should really pass on the ${taxi.make} ${taxi.model}`);

//     }

// function getSecret(file, secretPassword) {
//   file.opened = file.opened + 1;
//   if(secretPassword == file.password){
//     return file.contents
//   }  else {
//     return "Invalied password! No secret for you.";
//   }
// }

// function setSecret(file, secretPassword, secret) {
//     if (secretPassword == file.password) {
//         file.opened = 0;
//         file.contents = secret;
//     }
// }

// let superSecretFile = {
//     level: "classfied",
//     opened: 0,
//     password: 2,
//     contents: "Dr. Evel's next meeting is in Detroit."
// };

// let secret = getSecret(superSecretFile, 2)
// console.log(secret);

// setSecret = (superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.")
// secret = getSecret(superSecretFile, 2)
// console.log(secret);

// function makeCar () {
//     let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker" ];
//     let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
//     let years = [1955, 1957, 1948, 1954, 1961 ];
//     let colors = ["red", "blue", "tan", "yellow", "white"];
//     let convertible = [true, false];

//     let rand1 = Math.floor(Math.random() * makes.length);
//     let rand2 = Math.floor(Math.random() * models.length);
//     let rand3 = Math.floor(Math.random() * years.length);
//     let rand4 = Math.floor(Math.random() * colors.length);
//     let rand5 = Math.floor(Math.random() * 5) + 1;
//     let rand6 = Math.floor(Math.random() * 2);

// let car = {
//     make: makes[rand1],
//     model: models[rand2],
//     years: years[rand3],
//     color: colors[rand4],
//     passengers: rand5,
//     convertible: convertible[rand6],
//     mileage: 0
// };
// return car;
// }
// function displayCar(car) {
//     console.log(`Your new car is a ${car.years} ${car.make} ${car.model} ${car.passengers} ${car.convertible}`);

// }

// let carToSell = makeCar();
// displayCar(carToSell)

// let fiat = {
//     make: "Fiat",
//     model: "Bel Air",
//     year: "1957",
//     color: "Medium Blue",
//     passengers: "2",
//     convertible: false,
//     mileage: 1021,
//     started: false,
//     start: function () {
//         this.started = true
//     },
//     stop: function () {
//         this.started = false
//     },
//     drive: function () {
//         if (this.started) {
//             alert("Zoom zoom!")
//         } else {
//             alert("You need to start the engine first.")
//         }

//     }
// }
// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();

// let song = {
//     name: "Walk This Way",
//     artist: "Run-D.M.C.",
//     minutes: 4,
//     seconds: 3,
//     genre: "80s",
//     playing: false,
//     play: function () {
//         if (!this.playing) {
//             this.playing = true
//             console.log(`Playing ${this.name} by ${this.artist}`);

//         }
//     },
//     pause: function () {
//         if (this.playing) {
//             this.playing = false
//         }
//     }
// }
// song.play()
// song.pause()

function driveCar() {
  if (this.started) {
    if(this.fuel > 0){
      alert(`${this.make} ${this.model} goes zoom zoom!`);
      this.fuel -= 1
    
    
  } else {
    alert("Uh oh, out of fuel");
    this.stop()
  }
} else {
  alert("You need to start the engin first.")
  
}}

function startCar() {
  if(this.fuel > 0){
    this.started = true;
  } else {
    alert("The car is on empty, fill up before starting!")
  }
  
}

function stopCar() {
  this.started = false;
}

let taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  start: startCar,
  stop: stopCar,
  drive: driveCar,
};

let chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: "1957",
  color: "red",
  passengers: "2",
  convertible: false,
  mileage: 1021,
  started: false,
  start: startCar,
  stop: stopCar,
  drive: driveCar,
};

function addFuelCar(amount){
  this.fuel += amount
}

let fiat = {
  make: "Fiat",
  model: "Bel Air",
  year: "1957",
  color: "Medium Blue",
  passengers: "2",
  convertible: false,
  mileage: 1021,
  started: false,
  start: startCar,
  stop: stopCar,
  drive: driveCar,
  fuel: 0,
  addFuel: addFuelCar
};

// taxi.start();
// taxi.drive();
// taxi.stop();
// chevy.start();
// chevy.drive();
// chevy.stop();
fiat.start();
fiat.drive();
fiat.addFuel(1);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();