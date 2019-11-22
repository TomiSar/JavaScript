//Plunker http://plnkr.co/
//7. Objects
//Javascript bult-in Objects https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
//Number
// let result = 0 / 0;
// console.log()
// console.log(result)
// console.log(Number.isNaN(result))
// result = 2 / 1;
// console.log(Number.isNaN(result))

//String
// let result = "Hello World";
// console.log(result.toLocaleLowerCase());
// result = result.toUpperCase();
// console.log(result)

//Date
// let date = new Date().toDateString()
// console.log('\n' + date)
// date = new Date().toTimeString()
// console.log(date)

//Math
// let result = Math.random() * 52;
// result = Math.trunc(result);
// console.log(result)
// let result = Math.floor(Math.random() * 100 + 1)
// console.log(result)

//Array of Objects
// let cards = [
//     {   //1st Object
//         suit : "Hearts",
//         value : "Queen"
//     },
//     {   //2nd Object
//         suit: "Clubs",
//         value: "King"
//     }
// ]

// console.log()
// console.log(cards[0].value + ' of ' + cards[0].suit)
// console.log(cards[1].value + ' of ' + cards[1].suit)

//Passins Object to functions
// function changeCard(card) {
//     card.suit = "Clubs";
//     card.value = "Ace";
// }

// let card = {
//     suit: "Hearts",
//     value: "Queen"
// }

// changeCard(card)
// console.log('\n' + card.value + ' of ' + card.suit)

// let card = {
//     suit: "Hearts",
//     value: "Queen"
// }

// console.log()
// console.log(card.value + ' of ' + card.suit)

//Object basics
// let person = {
//     name: "John",
//     age: 32,
//     partTime : false
// }

// console.log()
// console.log(person.name)
// console.log(person.age)
// console.log(person.partTime)

//6. Funtion basics
//function scope
// let message = "This is the message that is printed in the console"
// function myMessage() {
//     let message = 'Hello world!';
//     return message;
// }

// myMessage()
// console.log(message)

// function triplePlus(value) {
//     let newValue = value + value + value;
//     return newValue;
// }

// triplePlus(3)
// console.log(newValue) //undefined

//function return values
// function myFunction(favouriteNumber) {
//     //let newNumber = favouriteNumber + 100;
//     return favouriteNumber + 100;
// }

// let result = myFunction(69)
// console.log('\n' + typeof(result))
// console.log(myFunction(69))

// function triplePlus(value) {
//     let newValue = value + value + value;
//     return newValue;
// }

// console.log('\n' + triplePlus(4))

//passing information to function
// function showMessage(times, message) {
//     for (let i = 0; i < times; i++) {
//         console.log(message)
//     }
// }

// console.log()
// showMessage(1, 'First Message')
// showMessage(2, 'Second message')

//without a parameter
// function showMessage() {
//     console.log('This is text inside function')
// }
// showMessage();

//5. Program flow
//while-loop
// let count = 3;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }

//for-loop
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

//switch-case
// let state = 'TX';

// switch (state) {
//     case 'NY':
//         console.log('New York');
//         break;
//     case 'TX':
//         console.log('Texas');
//         break;
//     default:
//         console.log('Unknown')
//         break;
// }

//else-if
// let score = 1001;
// if (score > 1000) {
//     score += 100;
//     console.log('You got bonus!')
// } else if (score === 1000) {
//     console.log('Almost!')
// } else {
//     console.log('Nice try!')
// }

// console.log('Score ' + score)

//if
// let score = 1000;
// if (score >= 1000) {
//     score += 100;
// }
// console.log("Score is " +  score)


//4. Types and arrays
//Array features https://www.w3schools.com/jsref/jsref_obj_array.asp
//pop and shift last and first element
// let values = [1, 2, 3, 55];

// values.splice(0, 3, 11, 22, 33, 44)
//values.splice(2, 1)
//values.splice(3, 1) //delete index 3 and remove one value
//let result = values.shift();
//let result = values.pop() <=> let result = values[values.length - 1]
// console.log(values)

//add elements in array
// let values = [];
// values.push(10)
// values.push(15)
// values.push(20)
// values.push(25)

// values.forEach(v => {
//     console.log(v)

// });

//String multiple values in Arrays
// let cards = ["Ace", "King", "Queen", "Jack"];
// console.log(cards[0])
// console.log(cards[1])
// console.log(cards[2])
// console.log(cards[3])

// console.log(cards[4])

// var l = cards.length
// console.log(l, typeof(l))

// let values = [1, 3, 5, 7, 9];

// for (let i = 0; i < values.length; i++) {
//     if (values[i] % 3 !== 0) {
//         console.log(values[i])
//     }
// }
//console.log(values.length)

//undefined and null
// let first = null;
// let second;
// console.log()
// console.log(first, typeof(first))
// console.log(second, typeof(second))

//boolean types
// let value = false;
// console.log(value, typeof(value))

//3. Javascript beginnings
//Type basics string and numbers
// let first = 12, second = 3;
// console.log('\nFirst number = ' + first)
// console.log('Second number = ' + second + '\n')
// console.log("Sum = " + sum(first, second))
// console.log("Difference = " + difference(first, second))
// console.log("Multiplication " + multiply(first, second))
// console.log("Division " + divide(first, second))
// console.log("Remainder " + remainder(first, second))

// function sum(num1, num2) {
//     return num1 + num2;
// }

// function difference(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function remainder(num1, num2) {
//     return num1 % num2;
// }

// let answer = 3 + 4 + 5;
// console.log(answer)
//console.log('Hello from Javascript')
//let productName = "Hammer", productId = "H123";
//let price = "5.00", price2 = 4.52;
//let className = "My class";
//console.log(price + price2)
//console.log(className)
//console.log(productName, productId);
// let firstName = "John", lastName = "Doe";
// console.log('\n' + firstName + " " + lastName)