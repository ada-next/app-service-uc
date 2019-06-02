const { Controller } = require("ada-cloud-util/boost");

class UserTreeController extends Controller {
    static configure = {
        basePath: "/usertree",
        actions: {
            getPermisionMap: { path: "/map", method: "get" },
            addUserTreeNode: { path: "/add", method: "post" },
            removeUserTreeNode: { path: "/edit", method: "post" },
            editUserTreeNode: { path: "/remove", method: "post" }
        },
        service: 'userTreeService'
    }

    getAllUserTree() {
        return this.userTreeService.getAllUserTree().then(a => this.success(a));
    }

    addUserTreeNode({ request }) {
        return this.userTreeService.addUserTreeNode(request.body).then(a => this.success(a));
    }

    removeUserTreeNode({ request }) {
        return this.userTreeService.removeUserTreeNode(request.body).then(a => this.success(a));
    }

    editUserTreeNode({ request }) {
        return this.userTreeService.editUserTreeNode(request.body).then(a => this.success(a));
    }
}

module.exports = UserTreeController;