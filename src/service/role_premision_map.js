const { Service } = require("ada-cloud-util/boost");
const RolePermisionMapModel = require("./../model/role_permision_map");

class RolePermisionMapService extends Service {
    static configure() {
        return {
            name: "rolePermisonMapService",
            dao: 'boost',
            methods: {
                getRolePermisionDetail: { transaction: false },
                addOrUpdateRolePermision: { transaction: false }
            }
        }
    }

    getRolePermisionDetail(roleId) {
        let rolePermision = new RolePermisionMapModel({ roleId });
        console.log(rolePermision);
        return this.dao.find(rolePermision);
    }

    addOrUpdateRolePermision({ roleId, actionIds }) {
        let rolePermision = new RolePermisionMapModel({ roleId });
        return this.dao.findAll(rolePermision).then(list => {
            if (list.length > 0) {
                return this.dao.update(new RolePermisionMapModel(roleId, actionIds));
            } else {
                return this.dao.insert(new RolePermisionMapModel({ roleId, actionIds }));
            }
        });
    }
}

module.exports = RolePermisionMapService;