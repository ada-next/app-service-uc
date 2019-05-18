const { Model, Types } = require("ada-cloud-util/boost");

class RoleActionMapModel extends Model {
    static configure = {
        table: 'user_role_map',
        fields: {
            id: { prime: true, type: Types.STRING },
            userId: { type: Types.STRING, field: 'user_id' },
            roleId: { type: Types.STRING, field: 'role_id' },
            createTime:{ type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = RoleActionMapModel;