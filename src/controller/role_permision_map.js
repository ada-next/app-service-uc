const { Controller } = require("ada-cloud-util/boost");

class RolePermisionMapController extends Controller {
    static configure = {
        basePath: "/rolepermisionmap",
        actions: {
            getRolePermisionDetail: { path: "/get", method: "get" },
            addOrUpdateRolePermision: { path: "/set", method: "post" }
        },
        service: 'rolePermisonMapService'
    }

    getRolePermisionDetail({ request }) {
        let { roleId } = request.query;
        return this.rolePermisonMapService.getRolePermisionDetail(roleId).then(a => this.success(a));
    }

    addOrUpdateRolePermision({ request }) {
        return this.rolePermisonMapService.addOrUpdateRolePermision(request.body).then(a => this.success(a));
    }
}

module.exports = RolePermisionMapController;