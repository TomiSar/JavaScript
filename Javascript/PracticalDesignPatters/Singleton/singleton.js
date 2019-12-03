var TaskRepo = (function () {
    var taskRepo;
    function createRepo() {
        var taskRepo = new Object("Task");
        return taskRepo;
    }

    return {
        getInstance: function () {
            if (!taskRepo) {
                taskRepo = createRepo();
            }
            return taskRepo;
        }
    }
})();

//two repos
var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
    console.log('\nTask repositories are the same')
}