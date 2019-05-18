const { Model, Types } = require("ada-cloud-util/boost");

class UserTreeModel extends Model {
    static configure = {
        table: 'user_tree',
        fields: {
            id: { prime: true, type: Types.STRING },
            nodeName: { type: Types.STRING, field: 'node_name' },
            nodeDesc: { type: Types.STRING, field: 'node_desc' },
            parentNodeId: { type: Types.STRING, field: 'parent_action_id' },
            createTime:{ type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = UserTreeModel;