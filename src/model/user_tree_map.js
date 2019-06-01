const { Model, Types } = require("ada-cloud-util/boost");

class UserTreeMapModel extends Model {
    static configure = {
        table: 'user_tree_map',
        fields: {
            id: { prime: true, type: Types.STRING },
            userId: { type: Types.STRING, field: 'user_id' },
            treeNodeId: { type: Types.STRING, field: 'tree_node_id' },
            createTime: { type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = UserTreeMapModel;