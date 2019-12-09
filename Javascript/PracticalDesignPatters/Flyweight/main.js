var Task = function (data) {
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
    this.name = data.name;
    // this.priority = data.priority;
    // this.project = data.project;
    // this.user = data.user;
    // this.competed = data.completed;
}

//Task prototype getPriority()
// Task.prototype.getPriority = function() {
//     this.Flyweight.priority;
// }

function Flyweight(project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
}

var FlyweightFactory = function () {
    var flyweights = {};
    //If flyweight exits return value(s).If flyweight doesn't exists, create and return FLyweight value(s) 
    var get = function (project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] =
                new Flyweight(project, priority, user, completed);
        }
        return flyweights[project, priority, user, completed];
    }

    var getCount = function () {
        var count = 0;
        for (var flyw in flyweights) count++;
        return count;
    }

    return {
        get: get,
        getCount: getCount
    }

}();

function TaskCollection() {
    var tasks = {};
    var count = 0;

    var add = function (data) {
        tasks[data.name] = new Task(data)
        count++;
    }

    var get = function () {
        return tasks[name];
    }

    var getCount = function () {
        return count;
    }

    return {
        add: add,
        get: get,
        getCount: getCount
    }
}

var tasks = new TaskCollection();
var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 100000; i++) {
    tasks.add({
        name: 'task ' + i,
        priority: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor(Math.random() * 2)]
    })
};

var afterMemory = process.memoryUsage().heapUsed;
// console.log('afterMemory: ' + afterMemory)
// console.log('initial memory: ' + initialMemory)
console.log('\nUsed memory: ' + (afterMemory - initialMemory) / 1000000 + ' megabytes');
console.log('Tasks count: ' + tasks.getCount())
console.log('Flyweights count: ' + FlyweightFactory.getCount())

/**********MEMORY USAGE**********/
//Without flyweight
// Used memory: 25.21356 megabytes
// Tasks count: 100000

//With flyweight
// Used memory: 23.998816 megabytes
// Tasks count: 100000
// Flyweights count: 160