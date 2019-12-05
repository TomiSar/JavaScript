//DEMO: More complicated Decorator
var Task = function (name) {
    this.name = name;
    this.completetd = false;
}

Task.prototype.complete = function () {
    console.log('Completing task : ' + this.name);
    this.completetd = true;
}

Task.prototype.save = function () {
    console.log('Saving task: ' + this.name)
}

console.log(); //empty line before complete and save 
var myTask = new Task('Legacy task');
myTask.complete();
myTask.save();

var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
}

//create Urgent task object from Task.prototype
UrgentTask.prototype = Object.create(Task.prototype);

//notify function() for UrgentTask
UrgentTask.prototype.notify = function () {
    console.log('Notifying important people');
}

//save function() for UrgentTask 
UrgentTask.prototype.save = function () {
    this.notify();
    console.log('Do specical stuff before saving');
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('This is urgent', 1);
ut.complete();
console.log(ut);