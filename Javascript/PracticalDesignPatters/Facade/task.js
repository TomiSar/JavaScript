//DEMO: Facade pattern
var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('Completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of completion of ' + task.name);
        },
        save: function (task) {
            console.log('saving task: ' + task.name);
        }
    }
}();

var TaskServiceWrapper = function () {

    var completeAndNotify = function (task) {
        //If task is completed set CompletionDate, notify for completion and save task
        TaskService.complete(firstTask);
        if (firstTask.completed == true) {
            TaskService.setCompleteDate(firstTask);
            TaskService.notifyCompletion(firstTask, firstTask.user);
            TaskService.save(firstTask);
        }
    }
    return { completeAndNotify: completeAndNotify }
}();

//Create first task
var firstTask = new Task({ name: 'FirstTask', priority: 1, project: 'Courses', user: 'JohnDoe', completed: false })
console.log();
console.log(firstTask);
console.log()
TaskServiceWrapper.completeAndNotify(firstTask);
console.log(firstTask);