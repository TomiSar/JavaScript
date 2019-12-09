var Task = require('./task');

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task: ' + task.name);
    }
}

var loggingService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task: ' + task.name);
    }
}

var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task: ' + task.name);
    }
}

function ObserverList() {
    this.observerList = [];
};

//add object to ObserverList
ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}

//get ObserverList
ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.count = function () {
    return this.observerList.length;
}

var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

ObservableTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}

ObservableTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
}

//var task1 = new Task({ name: 'Create a demo for constructors', user: 'John Doe' })
var task1 = new ObservableTask({ name: 'Create a demo for constructors', user: 'John Doe' })

var notifyServ = new notificationService();
var logServ = new loggingService();
var auditServ = new auditingService();

console.log();
task1.addObserver(notifyServ.update);
task1.addObserver(logServ.update);
task1.addObserver(auditServ.update);

task1.save();