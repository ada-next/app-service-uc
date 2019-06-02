const { Controller } = require("ada-cloud-util/boost");

class RoleController extends Controller {
    static configure = {
        basePath: "/role",
        actions: {
            getList: { path: "/list", method: "get" },
            addRole: { path: "/add", method: "post" },
            editRole: { path: "/edit", method: "post" },
            removeRole: { path: "/remove", method: "post" }
        },
        service: 'roleService'
    }

    getList({ request }) {
        let { from, size } = request.query;
        return this.roleService.getRoleList(from, size).then(a => this.success(a));
    }

    addRole({ request }) {
        return this.roleService.addRole(request.body).then(a => this.success(a));
    }

    editRole({ request }) {
        return this.roleService.editRole(request.body).then(a => this.success(a));
    }

    removeRole({ request }) {
        return this.roleService.removeRole(request.body).then(a => this.success(a));
    }
}

module.exports = RoleController;