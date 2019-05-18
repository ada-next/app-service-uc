const { Model, Types } = require("ada-cloud-util/boost");

class RoleActionMapModel extends Model {
    static configure = {
        table: 'role_action_map',
        fields: {
            id: { prime: true, type: Types.STRING },
            roleId: { type: Types.STRING, field: 'role_id' },
            actionId: { type: Types.STRING, field: 'action_id' },
            createTime:{ type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = RoleActionMapModel;