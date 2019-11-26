// let element = document.getElementById('first');
// element.style.color = 'blue';
// element.textContent = 'New content...';
// element.setAttribute('foo', 'fooValue');
//console.log(element);;

//Importing a module
// import { Car } from './models/car.js';

// let car = new Car("Lada")
// console.log(car.id)

//Inheritance
// class Vehicle {
//     constructor() {
//         this.type = 'car';
//     }
//     start() {
//         return `Starting ${this.type}`
//     }
// }

// //Inherit type from Vehicle class, calls start() method from super class
// //Add parameter brand from Car class 
// class Car extends Vehicle {
//     constructor(brand) {
//         super();
//         this.brand = brand;
//     }
//     start() {
//         //return `Starting ${this.type} ${this.brand}`
//         return super.start() + ` ${this.brand}`
//      }
// }

// let car = new Car();    //constuctor wihout parameter 
// console.log(car.type) //car
// car = new Car("Ferrari"); //constuctor with parameter
// console.log(car.start() )

//Constuctor properties
// class Vehicle{
//     constructor() {
//         this.type = 'car';
//     }
//     start() {
//         return `Starting ${this.type}`;
//     }
// }

// let vehicle = new Vehicle()
// console.log(vehicle.start())

// class Car {
//     constructor(id, color) {
//         this.id = id;
//         this.color = color;
//     }
//     identify(suffix) {
//         return `Car id: ${this.id} color: ${this.color} ${suffix}`
//     }
// }

//Class basics 
// let car = new Car(123, 'Red')
// console.log(car.identify('How cool!!!'))   
//Car id: 123 color: Red

// class Car {
//     constructor(id) {
//         this.id = id;
//     }
// }

// console.log()
// let car = new Car(123);
// console.log(car.id)
// car.id = 313;
// console.log(car.id)