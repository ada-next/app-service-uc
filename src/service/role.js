const { Service } = require("ada-cloud-util/boost");
const RoleModel = require("./../model/role");

class RoleService extends Service {
    static configure() {
        return {
            name: "roleService",
            dao: 'boost',
            methods: {
                getRoleList: { transaction: false },
                addRole: { transaction: false },
                editRole: { transaction: false },
                removeRole: { transaction: false }
            }
        }
    }

    getRoleList(from, size) {
        let role = new RoleModel();
        return this.dao.findPage(role, from, size);
    }

    addRole({ roleName, roleDesc }) {
        let role = new RoleModel({ roleName, roleDesc });
        return this.dao.insert(role);
    }

    editRole({ roleName, roleDesc }) {
        let role = new RoleModel({ roleName, roleDesc });
        return this.dao.update(role);
    }

    removeRole({ id }) {
        let role = new RoleModel({ id });
        return this.dao.remove(role);
    }
}

module.exports = RoleService;