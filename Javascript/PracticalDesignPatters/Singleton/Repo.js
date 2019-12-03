var repo = function () {

    var calltimes = 0;
    var save = function (task) {
        calltimes++;
        console.log('Saving ' + task + ' Called ' + calltimes + ' times');
    }

    console.log('newing up task repo')
    return {
        save: save
    }
}

//module.exports = repo;
//module.exports exports repo() function to main.js and taskHandler.js 
//--> var myrepo = require('./repo'); Singleton
module.exports = repo(); //--> works the same way module.exports = new repo;