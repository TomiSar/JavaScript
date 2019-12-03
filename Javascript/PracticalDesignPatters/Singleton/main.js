//https://nodejs.org/api/modules.html#modules_caching
var taskHandler = require('./taskHandler');
var myrepo = require('./repo');
//var repo = require('./repo')
//var myrepo = repo();    //repo instance

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();