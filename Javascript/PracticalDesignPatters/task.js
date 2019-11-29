// var task = Object.create(Object.prototype);
// task.title = 'My task';
// task.description = 'My description'

var task = {
    title: 'My Title',
    description: 'My description'
}

Object.defineProperty(task, 'toString', {
    value: function () {
        //return 'Title: ' + this.title + '\nDescription: ' + this.description;
        return 'title:' + this.title + '\ndescription:' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

//Another task
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' ir urgent'
    },
    writable : false,
    enumerable : false,
    configurable : false
})


// task.toString = function () {
//     return 'Title: ' + this.title + '\nDescription: ' + this.description;
// }

//Object.defineProperty(task, 'toString', { enumerable : true });
//console.log(task)
//console.log(Object.keys(task))
//console.log('\n' + task.toString())
console.log(urgentTask.toString())