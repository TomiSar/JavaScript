var Task = require('./task');

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name)
    }
}

var loggingService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name)
    }
}

var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task' + task.name)
    }
}

var mediator = (function () {

    var channels = {};
    var subscribe = function (channel, context, func) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = []
        }

        mediator.channels[channel].push({
            context: context,
            func: func
        });
    };

    var publish = function (channel) {
        if (!this.channels[channel]) {
            return false;
        }

        //args
        var args = Array.prototype.splice.call(arguments, 1);
        //console.log('Mediator channels length: ' + mediator.channels[channel].length); //log length

        for (let i = 0; i < mediator.channels[channel].length; i++) {
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }
    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    };

}())

var task = new Task({
    name: 'Create a demo for mediators',
    user: 'John Connor'
})

var notService = new notificationService();
var logService = new loggingService();
var adtService = new auditingService();

console.log();
mediator.subscribe('Complete', notService, notService.update); //Mediator Notification service --> subscribe and update
mediator.subscribe('Complete', logService, logService.update); //Mediator Logging service --> subscribe and update
mediator.subscribe('Complete', adtService, adtService.update); //Mediator noification service --> subscribe and update

task.complete = function () {
    mediator.publish('Complete', this);
    Task.prototype.complete.call(this);
}
//task.complete();

/*Notifying John Connor for task Create a demo for mediators
Logging John Connor for task Create a demo for mediators
Auditing John Connor for taskCreate a demo for mediators
Completing task: Create a demo for mediators*/
task.save();        //Saving task: Create a demo for mediators