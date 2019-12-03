var myrepo = require('./repo');
// var repo = require('./repo');
// var myrepo = repo();    //repo instance

var taskHandler = function() {
    return {
        save : function() {
            myrepo.save('Greetings from taskHandler');
        }
    }
}

module.exports = taskHandler();