const { Service } = require("ada-cloud-util/boost");
const UserModel = require("../model/user");

class UserService extends Service {
    static configure() {
        return {
            name: "userService",
            dao: 'mysql',
            methods: {
                login: { transaction: true }
            }
        }
    }

    login(username, password) {
        let userModel = new UserModel({ username, password });
        // throw Error('xxxx');
        return this.dao.find(userModel);
    }
}

module.exports = UserService;