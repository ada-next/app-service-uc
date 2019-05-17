const { Model, Types } = require("ada-cloud-util/boost");

class UserModel extends Model {
    static configure = {
        table: 'user',
        fields: {
            id: { prime: true, type: Types.STRING },
            username: { type: Types.STRING },
            password: { type: Types.STRING }
        }
    }
}

module.exports = UserModel;