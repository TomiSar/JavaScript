'use strict'; //Strict mode
/*JavaScript Objects and Prototypes : Jim Cooper Plunker: http://plnkr.co/edit/J81EK3TWFof0ekhEnyiJ?p=preview*/
//3. JavaScript prototypes and inheritance
//Creating Prototypes with Class

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }
    speak() {
        display(this.voice)
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('Meow')
        this.name = name
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy', 'White')
display(Object.keys(fluffy.__proto__.__proto__)) //empty array
display(fluffy.__proto__.__proto__.hasOwnProperty('speak')) //returns true

//fluffy.speak();
//display(fluffy.constructor)
//display(fluffy) //see line 33 display.js

//Creating own Prototypal Inheritance chains
// function Animal(voice) {
//     this.voice = voice || 'grunt'
// }
// Animal.prototype.speak = function () {
//     display(this.voice)
// }

// function Cat(name, color) {
//     Animal.call(this, 'Meow')
//     this.name = name
//     this.color = color
// }

// Cat.prototype = Object.create(Animal.prototype) //assign Cat to inherit properties from Animal  
// Cat.prototype.constructor = Cat
// var fluffy = new Cat('Fluffy', 'White')
// display(fluffy) //Animal constructor
// display(fluffy.__proto__) //protype Cat
// display(fluffy.__proto__.__proto__) //prototype's prototype Animal 

// display(fluffy instanceof Cat)
// display(fluffy instanceof Animal)
// fluffy.speak()

//Multiple levels of inheritance
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.age = 4
// var fluffy = new Cat('Fluffy', 'White')

// display(fluffy.__proto__)
// display(fluffy.__proto__.__proto__)
// display(fluffy.__proto__.__proto__.__proto__)

//Changing a function prototype
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.age = 3
// var fluffy = new Cat('Fluffy', 'White')
// var muffin = new Cat('Muffin', 'Brown')

// Cat.prototype = { age: 5 }
// var snowBell = new Cat('Snowbell', 'White')

// display(fluffy.age)
// display(muffin.age)
// display(snowBell.age)
// display(Cat.prototype.age)

//Graphical overview of prototypes
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.age = 3

// var fluffy = new Cat('Fluffy', 'White')
// var muffin = new Cat('Muffin', 'Brown')
// console.log('Fluffy prototype age: ' + fluffy.age)
// display(fluffy) //fluffy inherits age from Cat.prototype.age
// fluffy.age = 5; //instance property overrides the prototype property
// console.log('Fluffy instance age: ' + fluffy.age)
// display('Fluffy instance age: ' + fluffy.age)

//Instance vs prototype properties
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.age = 3;
// var fluffy = new Cat('Fluffy', 'White')
// var muffin = new Cat('Muffin', 'Brown')

// fluffy.age = 5
// display(`${fluffy.name} is ` + fluffy.age + ' years old')
// display('Fluffy prototype age: ' + fluffy.__proto__.age)
// display(fluffy.hasOwnProperty('age')) //false
//display(fluffy.hasOwnProperty('color')) //true

//display(Object.keys(fluffy))
//display(`${muffin.name} is ` + muffin.age + ' years old')

//What is prototype (Object that exists on every function in JavaScript)
/*A function's prototype*/
//A function's prototype: is the object instance that will become the prorotype
//for all objects created using this function as a constructor

/*An Object's prototype*/
//An object's prototype: is the object instance from which the object is inherited

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// var fluffy = new Cat('Fluffy', 'White');
// Cat.prototype.age = 3
// display(Cat.prototype)
// display(fluffy.__proto__)
// display(Cat.prototype === fluffy.__proto__) //true
// var muffin = new Cat('Muffin', 'Brownie')
// display(muffin.__proto__)

// var myFunc = function() {}
// display(myFunc.prototype)

// var cat = {name : 'Fluffy'}
// display(cat.__proto__)  //cat.prototype --> undefined

//Getting started with JavaScript prototypes
// var array = ['red', 'blue', 'green'];

// // Object.defineProperty(array, 'last', {
// //     get: function () {
// //         return this[this.length - 1]
// //     }
// // })

// //Done with Array.prototype
// Object.defineProperty(Array.prototype, 'last', {get : function() {
//     return this[this.length - 1]
// }})

// var last = array.last
// var array2 = ['one', 'two', 'three'];
// display(last)
// display(array2.last)
// display(Array)

// var last = array[array.length - 1]
// display(last)

//2. JavaScript object properties
//Using Getters and Setters
// var cat = {
//     name: { first: 'Fluffy', last: 'LeBeouf' },
//     color: 'White'
// }

// //Get full name
// Object.defineProperty(cat, 'fullname',
//     {
//         get: function () {
//             return this.name.first + ' ' + this.name.last;
//         },
//         set: function (value) {
//             var nameParts = value.split(' ') //use split for first and last name
//             this.name.first = nameParts[0]
//             this.name.last = nameParts[1]
//         }
//     });

//     cat.fullname = 'Muffin top';
//     display(cat.fullname); //Muffin top
//     display(`first name: ${cat.name.first} last name: ${cat.name.last}`)
    //display(cat.fullname) //Fluffy LeBeouf


//Using the Configurable attribute
// var cat = {
//     name: { first: 'Fluffy', last: 'LeBeouf' },
//     color: 'White'
// }

//Object.defineProperty(cat, 'name', { configurable: false });
//Object.defineProperty(cat, 'name', { enumerable: false }) //Uncaught TypeError: Cannot redefine property: name at Function.defineProperty (<anonymous>)
//Object.defineProperty(cat, 'name', { configurable: true }); //script.js:16 Uncaught TypeError: Cannot redefine property: name
//Object.defineProperty(cat, 'name', { writable: false })
// delete cat.name //script.js:18 Uncaught TypeError: Cannot delete property 'name' of #<Object>
// display(cat.name) //undefined

//Using the Enumerable attribute
// var cat = {
//     name: { first: 'Fluffy', last: 'LeBeouf' },
//     color: 'White'
// }

// //Object.defineProperty(cat, 'name', { enumerable: true });
// Object.defineProperty(cat, 'name', { enumerable: false });

// //Serializing cat Object to JSON
// display(JSON.stringify(cat)) //true:{"name":{"first":"Fluffy","last":"LeBeouf"},"color":"White"} false:{"color":"White"}
// display(cat['name']);

// for (var propertyName in cat) {
//     display(propertyName + ': ' + cat[propertyName])
// }

// display(Object.keys(cat)) //display Object keys
/*color: White
    Array {
    0: color
}*/

//Using the Writable attribute NOTE!! --> this only works in strict mode
// var cat = {
//     name: { first: 'Garfield', last: 'Goofy' },
//     color: 'Orange'
// }
// display(cat.name)
// Object.defineProperty(cat, 'name', {writable : false});
// Object.freeze(cat.name)
// cat.name.first = 'Fluffy'; //Uncaught TypeError: Cannot assign to read only property 'first' of object '#<Object>'
// display(cat.name)

// //Making Object non-writable (Object, Object property, Attribute : value)
// Object.defineProperty(cat, 'name', { writable: false });
// cat.name = 'Fluffy'; //Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
// //Get description from object and name of Object property 
// display(Object.getOwnPropertyDescriptor(cat, 'name'));

// //Using JavaScript property Descriptor 
// var cat = {
//     name: 'Garfield',
//     color: 'Orange'
// }

// //Get description from object and name of Object property  
// display(Object.getOwnPropertyDescriptor(cat, 'name'));
/*Object {
    value: Garfield
    writable: true
    enumerable: true
    configurable: true
}*/

//Using bracket Notation to Access 
// var cat = {
//     name: 'Fluffy',
//     color: 'White'
// }

// cat['eye color'] = 'Green';
// display(cat)
// display(cat['color']) //White

//1. Creating JavaScript Objects index.html display.js includes methods
//use ECMAScript6 Classes to Create Objects
// class Cat {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }

//     speaking() {
//         display(`${this.name} is ${this.color} and says I hate Mondays`)
//     }
// }

// var cat = new Cat('Garfield', 'Orange');
// alert('Hello this is Cat speaking');
// display(cat)
// display(cat.speaking())

//use Object.create() to Create
// var cat = Object.create(Object.prototype,
//     {
//         name: {
//             value: 'Fluffy',
//             enumerable: true,
//             writable: true,
//             configurable: true,
//         },
//         color: {
//             value: 'Pink',
//             enumerable: true,
//             writable: true,
//             configurable: true
//         }
//     })

// display(cat);

//Using constructor functions to create Object
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }
// var cat = new Cat('Jack', 'Black');
// display(cat);

//Default this is global object. Web browser this keyword is window object 
// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// var cat = new Cat('Fluffy', 'White');
// display(cat)

// var cat = {
//     name: 'Fluffy ',
//     color: 'Black',
//     speak: function () {
//         display(`Cat ${this.name} is ${this.color} and says Meow!!!`);
//     }
// }

// cat.speak();
// cat.age = 4;
// display(cat,age)
//display('Hello');

//Using Object literals to create Object
// var cat = { name: 'Jack', color: 'Black' }
// display(`A cat called ${cat.name} is ${cat.color}`) //A cat called Jack is Black