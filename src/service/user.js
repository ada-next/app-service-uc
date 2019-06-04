const { Service } = require("ada-cloud-util/boost");
const UserModel = require("../model/user");
const PermisionModel = require("./../model/permision");
const UserTreeModel = require("./../model/user_tree");

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
                getAllUsers: { transaction: false },
                getAllPermisionMap: { transaction: false },
                addUserTreeNode: { transaction: false },
            }
        }
    }

    login({ username, password }) {
        let userModel = new UserModel({ username, password });
        return this.dao.find(userModel);
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

    getAllPermisionMap() {
        let permision = new PermisionModel(), _list = [], _map = {};
        return this.dao.findAll(permision).then(list => {
            list.map(item => {
                let info = {
                    id: item.id,
                    name: item.actionName,
                    parent: item.actionParentId,
                    time: item.createTime,
                    page: item.actionPage,
                    path: item.actionPath,
                    icon: item.actionIcon || '',
                    list: []
                };
                _map[item.id] = info;
                return info;
            }).forEach(item => {
                let { parent } = item;
                if (!parent) {
                    _list.push(item);
                } else {
                    _map[parent].list.push(item);
                }
            });
            return _list;
        });
    }

    getAllUserTree() {
        let userTree = new UserTreeModel(), _list = [], _map = {};
        return this.dao.findAll(userTree).then(list => {
            list.map(item => {
                let info = {
                    id: item.id,
                    name: item.nodeName,
                    parent: item.parentNodeId,
                    time: item.createTime,
                    list: []
                };
                _map[item.id] = info;
                return info;
            }).forEach(item => {
                let { parent } = item;
                if (!parent) {
                    _list.push(item);
                } else {
                    _map[parent].list.push(item);
                }
            });
            return _list;
        });
    }

    addUserTreeNode({ nodeName, nodeDesc, parentNodeId }) {
        let userTree = new UserTreeModel({ nodeName, nodeDesc, parentNodeId });
        return this.dao.insert(userTree);
    }
}

module.exports = UserService;