const { Service } = require("ada-cloud-util/sql");

class UserService extends Service {
    static configure() {
        return {
            name: "userService",
            dao: 'mysql',
            methods: {}
        }
    }

    login(username, password) {
        return this.connect.execute('select * from task').then(result => {
            return result[0].map(a => a.id);
        });
    }
}

module.exports = UserService;