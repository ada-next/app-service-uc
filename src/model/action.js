const { Model, Types } = require("ada-cloud-util/boost");

class ActionModel extends Model {
    static configure = {
        table: 'action',
        fields: {
            id: { prime: true, type: Types.STRING },
            actionName: { type: Types.STRING, field: 'action_name' },
            actionDesc: { type: Types.STRING, field: 'action_desc' },
            actionParentId: { type: Types.STRING, field: 'action_parent_id' },
            roleId: { type: Types.STRING, field: 'role_id' },
            createTime:{ type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = ActionModel;