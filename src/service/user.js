const { Service } = require("ada-cloud-util/boost");
const UserModel = require("../model/user");

class UserService extends Service {
    static configure() {
        return {
            name: "userService",
            dao: 'boost',
            methods: {
                hasUserByUsername: { transaction: false },
                getUser: { transaction: false },
                addUser: { transaction: false },
                editUserInfo: { transaction: false },
                editPassword: { transaction: false },
                getAllUsers: { transaction: false }
            }
        }
    }

    login({ username, password }) {
        let userModel = new UserModel({ username, password });
        return this.dao.find(userModel).then(target => {
            if (target) {
                return this.dao.query(``);
            } else {
                return Promise.reject('username or password is not exist');
            }
        });
    }

    hasUserByUsername(username) {
        let userModel = new UserModel({ username });
        return this.dao.findAll(userModel);
    }

    getUser(username, password) {
        let userModel = new UserModel({ username, password });
        return this.dao.findAll(userModel);
    }

    getAllUsers(from, size) {
        let userModel = new UserModel();
        return this.dao.findPage(userModel, from, size);
    }

    addUser({ username, password, nickName, userDesc }) {
        let userModel = new UserModel({ username, password, nickName, userDesc });
        return this.dao.insert(userModel);
    }

    editUserInfo({ id, nickName, userDesc }) {
        let userModel = new UserModel({ id });
        return this.dao.find(userModel).then(target => {
            if (target) {
                userModel.nickName = nickName;
                userModel.userDesc = userDesc;
                return this.dao.update(userModel);
            } else {
                return Promise.reject('user can not found');
            }
        });
    }

    editPassword({ username, oldPassword, newPassword }) {
        let userModel = new UserModel({ username, password: oldPassword });
        this.dao.find(userModel).then(target => {
            if (target) {
                userModel.password = newPassword;
                return this.dao.update(userModel);
            } else {
                return Promise.reject('user can not found,password not equal');
            }
        });
    }
}

module.exports = UserService;