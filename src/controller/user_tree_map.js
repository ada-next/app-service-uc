const { Controller } = require("ada-cloud-util/boost");

class UserTreeMapController extends Controller {
    static configure = {
        basePath: "/usertreemap",
        actions: {
            getUserIdsByTreeNodeId: { path: "/userids", method: "get" },
            addUserIdByTreeNodeId: { path: "/adduser", method: "post" },
            removeUserIdByTreeNodeId: { path: "/removeuser", method: "post" }
        },
        service: 'userTreeMapService'
    }

    getUserIdsByTreeNodeId({ request }) {
        let { treeNodeId } = request.query;
        return this.userTreeMapService.getUserIdsByTreeNodeId(treeNodeId).then(a => this.success(a));
    }

    addUserIdByTreeNodeId({ request }) {
        return this.userTreeMapService.addUserIdByTreeNodeId(request.body).then(a => this.success(a));
    }

    removeUserIdByTreeNodeId({ request }) {
        return this.userTreeMapService.removeUserIdByTreeNodeId(request.body).then(a => this.success(a));
    }
}

module.exports = UserTreeMapController;