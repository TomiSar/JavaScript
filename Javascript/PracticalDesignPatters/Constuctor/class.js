//DEMO: Classes
'use strict';

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete() {
        console.log('completing task: ' + this.name)
        this.completed = true;
    }

    save = function () {
        console.log('saving task' + this.name);
    }
}

var task1 = new Task('create a demo for constructors');
var task1 = new Task('create a demo for modules');
var task1 = new Task('create a demo for singletons');
var task1 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();