const { Service } = require("ada-cloud-util/boost");
const UserTreeRoleMapModle = require("./../model/user_tree_role_map");

class UserTreeRoleMapService extends Service {
    static configure() {
        return {
            name: "userTreeRoleMapService",
            dao: 'boost',
            methods: {
                getRolePermisionDetail: { transaction: false }
            }
        }
    }

    getRoleIdsByTreeNodeId(treeNodeId) {
        let userTreeMap = new UserTreeRoleMapModle({ treeNodeId });
        return this.dao.findAll(userTreeMap);
    }

    addRoleIdByTreeNodeId({ roleId, treeNodeId }) {
        let userTreeMap = new UserTreeRoleMapModle({ roleId, treeNodeId });
        return this.dao.insert(userTreeMap);
    }

    removeRoleIdByTreeNodeId({ roleId, treeNodeId }) {
        let userTreeMap = new UserTreeRoleMapModle({ roleId, treeNodeId });
        return this, dao.remove(userTreeMap);
    }
}

module.exports = UserTreeRoleMapService;