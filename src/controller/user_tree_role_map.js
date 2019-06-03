const { Controller } = require("ada-cloud-util/boost");

class UserTreeRoleMapController extends Controller {
    static configure = {
        basePath: "/usertreerolemap",
        actions: {
            getRoleIdsByTreeNodeId: { path: "/roles", method: "get" },
            addRoleIdByTreeNodeId: { path: "/addrole", method: "post" },
            removeRoleIdByTreeNodeId: { path: "/removerole", method: "post" }
        },
        service: 'userTreeRoleMapService'
    }

    getRoleIdsByTreeNodeId({ request }) {
        let { treeNodeId } = request.query;
        return this.userTreeRoleMapService.getRoleIdsByTreeNodeId(treeNodeId).then(a => this.success(a));
    }

    addRoleIdByTreeNodeId({ request }) {
        return this.userTreeRoleMapService.addRoleIdByTreeNodeId(request.body).then(a => this.success(a));
    }

    removeRoleIdByTreeNodeId({ request }) {
        return this.userTreeRoleMapService.removeRoleIdByTreeNodeId(request.body).then(a => this.success(a));
    }
}

module.exports = UserTreeRoleMapController;