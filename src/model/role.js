const { Model, Types } = require("ada-cloud-util/boost");

class RoleModel extends Model {
    static configure = {
        table: 'role',
        fields: {
            id: { prime: true, type: Types.STRING },
            roleName: { type: Types.STRING, field: 'role_name' },
            roleDesc: { type: Types.STRING, field: 'role_desc' },
            createTime:{ type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = RoleModel;