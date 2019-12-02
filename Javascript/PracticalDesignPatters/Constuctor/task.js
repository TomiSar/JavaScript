//DEMO: Singleton Angular
//DEMO: Singleton node
//DEMO: Factory pattern
//DEMO: Module pattern


//DEMO: Constructor Angular
(function () {
    app = angular.module('taskManager', []);

    app.factory('Task', function() {
        var Task = function(data) {
            this.name = data.name;
            this.completed = data.completed;
        }

        Task.prototype.complete = function() {
            console.log('competing task ' + this.name);
            this.completed = true;
        };

        Task.prototype.save = function() {
            console.log('saving task ' + this.name);
        };

        return Task;
    });
}())

//DEMO: Constructor Node
// var Task = function (name) {
//     this.name = name;
//     this.completed = false;
// }

// Task.prototype.complete = function () {
//     console.log('competing task: ' + this.name);
//     this.completed = true;
// }

// Task.prototype.save = function () {
//     console.log('saving task ' + this.name);
// }

// module.exports = Task;

//Demo prototypes
// var Task = function (name) {
//     this.name = name;
//     this.completed = false;
// }

// Task.prototype.complete = function () {
//     console.log('competing task: ' + this.name);
//     this.completed = true;
// }

// Task.prototype.save = function () {
//     console.log('saving task: ' + this.name);
// }

// var task1 = new Task('create a demo for constuctors');
// var task2 = new Task('create a demo for modules');
// var task3 = new Task('create a demo for singletons');
// var task4 = new Task('create a demo for prototypes');

// console.log();
// task1.complete();
// task2.save();
// task3.save();
// task4.save();

//DEMO : Constuctor pattern
// var Task = function(name) {
//     this.name = name;
//     this.completed = false;

//     this.complete = function () {
//         console.log('Completing task ' + this.name)
//         this.completed = true;
//     }

//     this.save = function () {
//         console.log('Saving Task: ' + this.name);
//     }
// }

// var task1 = new Task('create first demo for constructors');
// var task2 = new Task('create second demo for modules');
// var task3 = new Task('create third demo for factorys');
// var task4 = new Task('create third demo for singletons');

// console.log();
// task1.complete();
// task2.save();
// task3.save();
// task4.save();

//Demo : task creation
// var task = Object.create(Object.prototype);
// task.title = 'My task';
// task.description = 'My description'
// var task = {
//     title: 'My Title',
//     description: 'My description',
//     descriptiontwo: 'My second description'
// }

// Object.defineProperty(task, 'toString', {
//     value: function () {
//         if (this.description === 'My description') {
//             return '\ntitle: ' + this.title + '\ndescription: ' + this.descriptiontwo;
//         }
//         return '\ntitle:' + this.title + '\ndescription:' + this.description;
//     },
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

// //Create Urgent Task 
// var urgentTask = Object.create(task);
// Object.defineProperty(urgentTask, 'toString', {
//     value: function () {
//         return this.title + ' is urgent'
//     },
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// task.toString = function () {
//     return 'Title: ' + this.title + '\nDescription: ' + this.description;
// }

//Object.defineProperty(task, 'toString', { enumerable : true });
//console.log(task)
//console.log(Object.keys(task))
//console.log('\n' + task.toString())
// console.log(task.toString())
// console.log(urgentTask.toString())