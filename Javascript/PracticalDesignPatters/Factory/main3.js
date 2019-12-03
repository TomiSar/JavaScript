var Task = require('./task');
var repoFactory = require('./repoFactory2');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));
var user = new Task(repoFactory.user.get(1));
var project = new Task(repoFactory.project.get(1));

task1.user = user;
task1.project = project;

//log task
task1.save();