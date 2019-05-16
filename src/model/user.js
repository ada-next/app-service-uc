const { Model } = require("ada-cloud-util/boost");

class UserModel extends Model {
    static configure = {
        table: 'user',
        fields: {
            id: { prime: true },
            username: { type: String },
            password: { type: String }
        }
    }
}

module.exports = UserModel;