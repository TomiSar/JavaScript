var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('Completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('Saving task: ' + this.name);
}

console.log() //empty line before task is completed and saved
var myTask = new Task('Legacy task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent task');
urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log('Notifying important people')
}

urgentTask.complete();
urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this)
}

urgentTask.save();

// function taskName(name) {
//     //console.log('Create task name : ' + this.name)
//     console.log(`Create task name : ${this.name}`)
// }