//Practical design patters in JavaScript -- Jonathan Mills

//6. Behavioral design patters
//console.log('Behavioral design patterns')
//Behavioral patterns includes : 
//1. Command 2. Mediator 3. Observor

//5. Structural design patters
//Structural patterns includes : 1. Decorator 2. Facade 3. Flyweight
//console.log('5. Structural design patterns')

//4. Creational Design patters plunkr http://plnkr.co/edit/LQepAH?p=info (Design pattern demo)
//console.log('4. Creational design patterns')
//Creational patters includes : 1. Constructor 2. Module 3. Factory 4. Singleton
//Module pattern

var module = function () {
    var privateVar = 'Private variable';

    return {
        method: function () {
            console.log('First method returns this');
        },
        nextMethod: function () {
            console.log('Next method returns this');
        }
    }
}

//DEMO: Constructor Angular
//Demo: Constructor node
//Constructor node
//Demo: Prototypes
//Prototypes
// function ObjectName(parameter1, parameter2) {
//     this.parameter1 = parameter1;
//     this.parameter2 = parameter2;

//     this.toString = function() {
//         return this.parameter1 + ' ' + this.parameter2;
//     }
// }

//Demo: Constuctor pattern
//Constuctor pattern
// function ObjectName(parameter1, parameter2) {
//     this.parameter1 = parameter1;
//     this.parameter2 = parameter2;

//     this.toString = function () {
//         return this.parameter1 + ' ' + this.parameter2;
//     }
// }

// var object = Object.create();

//3. Objects in JavaScript
//console.log('\n3. Objects in JavaScript')
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