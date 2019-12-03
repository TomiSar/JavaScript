var repoFactory = function () {

    this.getRepo = function (repoType) {
        //Taskrepo in use
        if (repoType === 'task') {
            var taskRepo = require('./taskRepository')();
            return taskRepo;
        }

        //Userrepo in use
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }

        //Projectrepo in use
        if (repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
};

module.exports = new repoFactory; 