const { Controller } = require("ada-cloud-util/boost");

class PermisionController extends Controller {
    static configure = {
        basePath: "/permison",
        actions: {
            getPermisionMap: { path: "/map", method: "get" },
            addPermisionNode: { path: "/add", method: "post" },
            editPermisonNode: { path: "/edit", method: "post" },
            removePermisionNode: { path: "/remove", method: "post" }
        },
        service: 'permisionService'
    }

    getPermisionMap() {
        return this.permisionService.getAllPermisionMap().then(a => this.success(a));
    }

    addPermisionNode({ request }) {
        return this.permisionService.addPermisionNode(request.body).then(a => this.success(a));
    }

    editPermisonNode({ request }) {
        return this.permisionService.editPermisonNode(request.body).then(a => this.success(a));
    }

    removePermisionNode({ request }) {
        return this.permisionService.removePermisionNode(request.body).then(a => this.success(a));
    }
}

module.exports = PermisionController;