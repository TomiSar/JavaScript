var repoFactory = function () {

    this.getRepo = function(repoType) {
        //Repotype is task
        if (repoType === 'task') {
            if (this.taskRepo) {
                //console.log('Retrieving from cache')
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository')();
                return this.taskRepo;
            }
        }

        //Repotype is user
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }

        //Repotype is user
        if (repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
};

module.exports = new repoFactory;