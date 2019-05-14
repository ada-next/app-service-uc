const PrivateVerifiyer = require("ada-cloud-util/verifier/private");
const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure() {
        return {
            basePath: "",
            actions: {
                login: { path: "/login", method: 'get' }
            }
        }
    }

    login({ Service, request, keys }) {
        let { username, password } = request.query;
        return Service.getService("userService").login(username, password).then(result => {
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