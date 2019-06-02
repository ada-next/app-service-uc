const { Service } = require("ada-cloud-util/boost");
const PermisionModel = require("./../model/permision");

class PermisionService extends Service {
    static configure() {
        return {
            name: "permisionService",
            dao: 'boost',
            methods: {
                getAllPermisionMap: { transaction: false },
                addPermisionNode: { transaction: false },
                editPermisonNode: { transaction: false },
                removePermisionNode: { transaction: false }
            }
        }
    }

    getAllPermisionMap() {
        let permision = new PermisionModel(), _list = [], _map = {};
        return this.dao.findAll(permision).then(list => {
            list.map(item => {
                let info = {
                    id: item.id,
                    name: item.actionName,
                    parent: item.actionParentId,
                    time: item.createTime,
                    page: item.actionPage,
                    path: item.actionPath,
                    icon: item.actionIcon || '',
                    list: []
                };
                _map[item.id] = info;
                return info;
            }).forEach(item => {
                let { parent } = item;
                if (!parent) {
                    _list.push(item);
                } else {
                    _map[parent].list.push(item);
                }
            });
            return _list;
        });
    }

    addPermisionNode({ actionName, actionIcon, actionDesc, actionPage, actionParentId, actionPath }) {
        let permision = new PermisionModel({ actionName, actionIcon, actionDesc, actionPage, actionParentId, actionPath });
        return this.dao.insert(permision);
    }

    editPermisonNode({ actionName, actionDesc, actionIcon, actionPage, actionPath, id }) {
        let permision = new PermisionModel({ actionName, actionDesc, actionIcon, actionPage, actionPath, id });
        return this.dao.update(permision);
    }

    removePermisionNode(id) {
        let permision = new PermisionModel({ id });
        return this.dao.remove(permision);
    }
}

module.exports = PermisionService;