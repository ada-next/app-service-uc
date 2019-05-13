const Path = require("path");
const Server = require("./src/index");
const { Booster, Service } = require("ada-cloud-util/boot");
const { SyncFile } = require("ada-util");

let server = new Server();
server.on('configchange', () => {
    let { db } = server.config;
    Booster.updateDatabase(db);
});
server.on('started', () => {
});
server.startup(({ context, config }) => {
    context.Service = Service;
    context.keys = {
        private: new SyncFile(Path.resolve(__dirname, "./keys/rsa.private")).read(),
        public: new SyncFile(Path.resolve(__dirname, "./keys/rsa.public")).read()
    };
    return Booster.boot({
        source: Path.relative(__dirname, "./src"),
        database: config.db,
        koa: server
    });
});