//Consturctor angular urgentTask.js
(function () {
    var app = angular.module('taskManager');

    app.factory('UrgentTask', function (Task, TaskRepository) {
        var urgentTask = function (data) {
            Task.call(this, data);
            this.priority = data.priority;
        };

        UrgentTask.prototype = Object.create(Task.prototype);

        UrgentTask.prototype.notify = function () {
            console.log('Notifying important poeople');
        }

        UrgentTask.prototype.save = function () {
            this.notify();
            console.log('do special stuff before saving');
            Task.protype.save.call(this);
        }
        return UrgentTask;
    });

}())