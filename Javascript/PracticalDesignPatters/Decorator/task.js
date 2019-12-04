var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

Task.prototype.notify = function() {
    console.log('Notifying important people')
}

var myTask = new Task('Legacy task');
console.log() //log an empty line before task is completed and saved
myTask.notify();
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent task');
//taskName(urgentTask.name)
urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log('Notifying important people')
}

urgentTask.notify();
urgentTask.complete();
urgentTask.save();

// function taskName(name) {
//     //console.log('Create task name : ' + this.name)
//     console.log(`Create task name : ${this.name}`)
// }