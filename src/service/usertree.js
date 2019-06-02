const { Service } = require("ada-cloud-util/boost");
const UserTreeModel = require("../model/user_tree");

class UserTreeService extends Service {
    static configure() {
        return {
            name: "userTreeService",
            dao: 'boost',
            methods: {
                getAllUsers: { transaction: false },
                addUserTreeNode: { transaction: false }
            }
        }
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

    removeUserTreeNode(id) {
        let userTree = new UserTreeModel({ id });
        return this.dao.remove(userTree);
    }

    editUserTreeNode({ nodeName, nodeDesc, id }) {
        let userTree = new UserTreeModel({ nodeName, nodeDesc, id });
        return this.dao.update(userTree);
    }
}

module.exports = UserTreeService;