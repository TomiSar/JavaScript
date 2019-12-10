var Task = require('./task');

//Notification for task
var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

//Logging for task
var loggingService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

//Auditing for task
var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

function ObserverList() {
    this.observerList = [];
};

//add object to task
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

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
}


var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

//exmpale of prototype method Object protoptype --> ObservableTask.prototype.methodName = function(arguments) {  }
ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
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
var task = new ObservableTask({
    name: 'Create a demo for constructors',
    user: 'John Doe'
})

var notifyServ = new notificationService();
var logServ = new loggingService();
var auditServ = new auditingService();

console.log();
task.addObserver(notifyServ.update);    //Notifying
task.addObserver(logServ.update);       //Logging
task.addObserver(auditServ.update);     //Updating
task.save();                            //save task

task.removeObserver(auditServ.update);  //remove auditing service
task.save();                            //save after remove auditing service 