const PrivateVerifiyer = require("ada-cloud-util/verifier/private");
const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure = {
        basePath: "/user",
        actions: {
            login: { path: "/login", method: 'get' },
            hasUser: { path: "/has", method: 'get' },
            getUserList: { path: "/list", method: 'get' },
            addUser: { path: "/add", method: "post" }
        },
        service: 'userService'
    }

    login({ request, keys }) {
        let { username, password } = request.query;
        return this.userService.login(username, password).then(result => {
            console.log(result);
            if (result) {
                let token = new PrivateVerifiyer(keys.private).getToken(k.getPainObject());
                return this.success(token);
            } else {
                return this.error('username or password is wrong');
            }
        });
    }

    hasUser({ request }) {
        let { username } = request.query;
        return this.userService.hasUserByUsername(username).then(a => this.success(a));
    }

    addUser({ request }) {
        let info = request.body;
        return this.userService.addUser(info).then(a => this.success(a));
    }

    getUserList() {
        return this.userService.getAllUsers().then(a => this.success(a));
    }
}

module.exports = TextController;