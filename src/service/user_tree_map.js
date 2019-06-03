const { Service } = require("ada-cloud-util/boost");
const UserTreeMapModel = require("./../model/user_tree_map");

class UserTreeMapService extends Service {
    static configure() {
        return {
            name: "userTreeMapService",
            dao: 'boost',
            methods: {
                getUserIdsByTreeNodeId: { transaction: false }
            }
        }
    }

    getUserIdsByTreeNodeId(treeNodeId) {
        let userTreeMap = new UserTreeMapModel({ treeNodeId });
        return this.dao.findAll(userTreeMap);
    }

    addUserIdByTreeNodeId({ userId, treeNodeId }) {
        let userTreeMap = new UserTreeMapModel({ userId, treeNodeId });
        return this.dao.insert(userTreeMap);
    }

    removeUserIdByTreeNodeId({ userId, treeNodeId }) {
        let userTreeMap = new UserTreeMapModel({ userId, treeNodeId });
        return this, dao.remove(userTreeMap);
    }
}

module.exports = UserTreeMapService;