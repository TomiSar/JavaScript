//console.log('\nJavaScript funcamentals');
console.log()
//Forms
//Data access using HTTP
//Promises and error handling
//Programming the BOM and DOM
//Classes and modules
//6. Objects and Arrays

//Aray iterration

//JSON JavaScript object notation

//Expanding Objects using Prototypes
//String.Prototype
// String.prototype.hello = function () {
//     return this.toString() + 'Hello';
// }

// console.log('' .hello() +  ' World!!')

//Prototypes
// function Car(id) {
//     this.carId = id;
// }

// Car.prototype.start = function () {
//     console.log('Starting ' + this.carId)
// }

// let car = new Car(456);
// car.start(); //Start 456

//Constuctor functions
// function Car(id) {
//     this.carId = id;

//     this.start = function() {
//         console.log('Start: ' + this.carId)
//     }
// }

// let car = new Car(131313);
// car.start();

// function Car(id) {
//     this.id = id;
//     let newCar = 'Mercedes-Benz'
// }

// let car = new Car(123)
// console.log(car.id)

//5. Functions and scopes
//Default parameters
// let carId = 'Porsche'
// let trackCar = function(carId, city = 'Ny' ) {
//     console.log(`Tracking ${carId} in city ${city}.`);
// }

// console.log (trackCar(123) ); //Tarcking in NY undefined
// console.log( trackCar(123, 'Chicago') ); //Tarcking in Chicago.

//Arrow function
//let getId = (prefix, suffix) => prefix + 123 + suffix
//Arrow functions do not have their own this value this refers to the enclosing context 
// let getId = (prefix, suffix) => {
//     return prefix + 123 + suffix;
// }

// console.log(getId('ID : ', '!') ); //add space afer last arguments --> ID: 123!

//bind
// let o = {
//     carId : 123,
//     getId: function() {
//         return this.carId;
//     }
// }

// let newCar = {carId : 234};
// let newFn = o.getId.bind(newCar)
// console.log(newFn())

//call and apply
// let o = {
//     carId: 123,
//     getId: function (prefix) {
//         return prefix + this.carId;
//     }
// };

// let newCar = { carId: 456 };
// console.log(o.getId.apply(newCar, ['ID :']) );
// let newestCar = { carId: 789 };
// console.log(o.getId.apply(newestCar, ['ID :']) )

// let o = {
//     carId: 123,
//     getId: function () {
//         return this.carId;
//     }
// };

// console.log(o.getId())
// let newCar = { carId: 456 };        //123
//console.log(o.getId.call(newCar)); <=> console.log(o.getId.apply(newCar, ['ID: '])); //456

//this keyword
// let o = {
//     carId: 123,
//     getId: function() {
//         console.log(this)
//         return this.carId;
//     }
// }

// console.log(o.getId()); //123

// let fn = function() {
//     console.log(this === window);
// }

// fn(); //true

//Closures
// let app = (function () {
//     let carId = 789;

//     let getId = function () {
//         return carId;
//     };
//     return {
//         getId: getId
//     };
// })()

//console.log(app)
//console.log(app.getId() + ' type is ' + typeof (app.getId()))

//IIFEs
// let app = (function () {
//     let carId = 456;
//     console.log(`Car id ${carId} in function`)
//     return {}
// })()

// console.log(app)

// let app = (function () {
//     let carId = 123;
//     console.log('in function')
//     //console.log(`Car id ${carId} in function`)
//     return {}
// })()

// (function () {
//     console.log('Inside function')
// })();

//Block scope
// if (5 === 5) {
//     let message = 'Equal';
//     //var message = 'Equal'; works
// }
// console.log(message)

// let message = 'Outside';
// if (5 === 5) {
//     let message = 'Equal';
//     console.log(message)
// }

// console.log(message)

//Function scope
// function startCar(carId) {
//     let message = `Starting car ${carId}`;
//     let startFn = function turnKey() {
//         let message = 'Override...';
//     }
//     startFn();
//     console.log(message)
// }

// startCar(123) //Starting car 123 

// let message = ''
// function startCar(carId) {
//     message = `Starting car ${carId}`;
// }
// startCar(123);
// console.log(message)

// function startCar(carId) {
//     let message = 'Starting...'
//     let startFn = function turnKey() {
//         console.log(message)
//     };
//     startFn()
// }

// startCar(123)

//4. Operators
//Operator precdendce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

//Assignment operators
//let year = 1964;
// var year = 1964;
// console.log(year >>= 0)
//console.log(year >>= 1) //981
//console.log(year >>= 2) //491
//year = year >>= 3;
//console.log(parseInt(year))
//console.log((Number)(year))
//console.log(parseFloat(year >>= 3)) //245.5=245

//Conditional operator  
// let var1 = 4, var2 = 5;
// console.log(var2 > var1 ? 'yes' : 'no') //yes
// console.log(var2 < var1 ? 'yes' : 'no') //no

//Relational operators
// let s1 = 'zoo';
// let s2 = 'Car';
// let s3 = 'Zoo';

//operational condition compares alphabetical string in the current case
// if (s1 === s2) {
//     console.log(s1 + ' is equal ' + s2)
// } else if (s1 < s2) {
//     console.log(s1 + ' is smaller ' + s2)
// } else {
//     console.log(s1 + ' is larger ' + s2)
// }

// if (s1.toUpperCase() === s3.toUpperCase()) {
//     console.log(s1 + ' is equal to ' + s3 + '. If toUppercase() function is used.')
// }

//Logical and boolena operators
//let userSettings = null;
// let userSettings = { name: 'Joe' }
// let defaultSettings = { name: 'Default' };
//console.log(userSettings || defaultSettings)
// let car = null
// console.log(!car + ' ' + typeof(car))

//Unary operators
// let year = "1980";
// console.log(-year)

// console.log(year++) 
// console.log(year)
// console.log(year--)
// console.log(year)
// console.log(++year)
// console.log(year)
// console.log(--year)
// console.log(year)
// console.log(typeof(year))

//Equality operators
// let id = 123;
// console.log(id === 123)   //true
// console.log(id === "123") //false
// console.log(id !== "123") //true
// console.log(typeof(id))

// var1 = 3, var2 = 4
// if (var1 === var2) {
//     console.log(var1 + ' is equal to  ' + var2)
// } else {
//     console.log(var1 + ' is not equal to  ' + var2)
// }

//Security and Building production

//JavaScript fundamentals Intermediate
//3. Language features
// if (false) { //true=100 and false=undefined
//     var carId = 100;
// }
// console.log(carId)
// let car = [
//     {
//         brand: "Ferrari",
//         color: "Pink"
//     },
//     {
//         brand: "Lada",
//         color: "Red"
//     }
// ]
// console.log('Hello from JS')
// console.log('You have ' + car[0].color + ' ' + car[0].brand)
// if (car[1].brand === "Lada") {
//     console.log('You have ' + car[1].color + ' ' + car[1].brand)
// }