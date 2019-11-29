//Practical design patters in JavaScript -- Jonathan Mills

//6. Behavioral design patters
//Behavioral
//1. Command
//2. Mediator
//3. Observor
//console.log('Behavioral design patterns')

//5. Structural design patters
//Structural
//1. Decorator
//2. Facade
//3. Flyweight
//console.log('5. Structural design patterns')

//4. Creational Design patters
//Creational
//1. Constructor
//2. Module
//3. Factory
//4. Singleton
//console.log('4. Creational design patterns')

//3. Objects in JavaScript
console.log('\n3. Objects in JavaScript')


//Demo: Inheritance
//Object.create for inheritance


//Demo: Define property
//Define property (for Object)
// Object.defineProperty(object, 'name', {
//     value: 'my name',
//     writable: true,
//     configurable: true,
//     enumerable: true
// })

//Demo task Creation see in file task.js
// var task = Object.create(Object.prototype);
// task.title = 'My task';
// task.description = 'My description'
// var task = {
//     title: 'My Title',
//     description: 'My description'
// }

// task.toString = function () {
//     return 'Title: ' + this.title + '\nDescription: ' + this.description;
// }

// console.log()
// console.log(task.toString())

//Reading and writing attributes
// var object = {}
// var value = 'value';
// object[value] = 'new value';
// console.log(object[value]);

// var object = {}
// object.param = 'new value' //<=> object['param'] = 'new value'
// console.log(object.param)

//Creating objects using JavaScript
//ways to create new Objects
// var object = {};
// var nextObject = Object.create(Object.prototype);
// var lastObject = new Object();
// console.log(object)     //{}
// console.log(nextObject) //{}
// console.log(lastObject) //{}

//2. What is a design pattern
//console.log('2. What is a design pattern')
//The types of patterns
//What is a design pattern
//The gang of four
//Physical design patters
//Design pattens to rescue
//The problem

//Introduction
// var Task = function(name) {
//     this.name = name;
//     this.completed = false;

//     this.completed = function() {

//     }
// } 