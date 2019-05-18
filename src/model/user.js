const { Model, Types } = require("ada-cloud-util/boost");

class UserModel extends Model {
    static configure = {
        table: 'user',
        fields: {
            id: { prime: true, type: Types.STRING },
            username: { type: Types.STRING },
            password: { type: Types.STRING },
            nickName: { type: Types.STRING, field: 'nick_name' },
            userDesc: { type: Types.STRING, field: 'user_desc' },
            createTime:{ type: Types.DATE, field: 'create_time' }
        }
    }
}

module.exports = UserModel;