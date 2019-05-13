const { Service } = require("ada-cloud-util/boot");

class UserService extends Service {
    static configure() {
        return {
            name: "userService",
            dao: 'mysql',
            methods: {}
        }
    }

    login(username, password) {
        return this.connect.query('select username,password from user where username=? and password=?', [username, password]).then(result => {
            if (result.length > 0) {
                return result[0][0];
            } else {
                return null;
            }
        });
    }
}

module.exports = UserService;