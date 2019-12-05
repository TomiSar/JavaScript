(function () {
    var app = angular.module('taskManager');

    var taskRepo = function ($http) {
        var times = 0;
        var db = {};

        var get = function (id) {
            times++;
            console.log('Getting task ' + id + ' called ' + times + ' times.');
            return {
                name: 'task ' + id
            }
        }

        var save = function (task) {
            times++;
            console.log('Saving ' + task.name + ' to the db' + ' called ' + times + ' times.');
        }


        return {
            get: get,
            save: save
        }

    }
    app.service('TaskRepository', taskRepo);

}())