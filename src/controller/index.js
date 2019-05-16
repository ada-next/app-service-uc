const PrivateVerifiyer = require("ada-cloud-util/verifier/private");
const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure = {
        basePath: "",
        actions: {
            login: { path: "/login", method: 'get' }
        },
        service: 'userService'
    }

    login({ request, keys }) {
        let { username, password } = request.query;
        return this.service.login(username, password).then(result => {
            console.log(result);
            if (result) {
                let k = {};
                Reflect.ownKeys(result).forEach(key => {
                    k[key] = result[key];
                });
                let token = new PrivateVerifiyer(keys.private).getToken(k);
                return this.success(token);
            } else {
                return this.error('username or password is wrong');
            }
        });
    }
}

module.exports = TextController;