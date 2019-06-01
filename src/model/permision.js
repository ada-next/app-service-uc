const { Model, Types } = require("ada-cloud-util/boost");

class PermisionModel extends Model {
    static configure = {
        table: 'permision',
        fields: {
            id: { prime: true, type: Types.STRING },
            actionName: { type: Types.STRING, field: 'action_name' },
            actionDesc: { type: Types.STRING, field: 'action_desc' },
            actionParentId: { type: Types.STRING, field: 'action_parent_id' },
            actionIcon: { type: Types.STRING, field: 'action_icon' },
            actionPath: { type: Types.STRING, field: 'action_path' },
            actionPage: { type: Types.STRING, field: 'action_page' },
            createTime: { type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = PermisionModel;