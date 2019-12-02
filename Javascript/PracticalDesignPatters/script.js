//Constuctor angular script.js
(function () {
    var app = angular.module('taskManager', [])

    var taskController = function (Task, UrgentTask, TaskRepository) {
        var ctrl = this;
        ctrl.tasks = [];
        ctrl.tasks.push(new Task(TaskRepository.get(1)));
        ctrl.tasks.push(new Task(TaskRepository.get(2)));
        ctrl.tasks.push(new UrgentTask(TaskRepository.get(1)));
        ctrl.tasks.push(new UrgentTask(TaskRepository.get(2)));
    }

    app.controller('taskController', taskController);

}())