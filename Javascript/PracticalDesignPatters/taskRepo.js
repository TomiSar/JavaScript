//Constuctor angular TaskRepository.js
(function () {
    var app = angular.module('taskManager');

    var taskRepo = function ($http) {
        var calltimes = 0;
        var db = {};

        var get = function (id) {
            calltimes++;
            console.log('Getting task ' + id + ' called ' + calltimes + ' times.');
            return {
                name: 'task ' + id
            }
        }

        var save = function (task) {
            calltimes++;
            console.log('Saving ' + task.name + ' to the db' + calltimes + ' times.');
        }


        return {
            get: get,
            save: save
        }

    }
    app.service('TaskRepository', taskRepo);

}())