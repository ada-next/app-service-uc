const Path = require("path");
const Server = require("./src/index");
const { SyncFile } = require("ada-util");

let server = new Server();
server.startup(({ context }) => {
    context.keys = {
        private: new SyncFile(Path.resolve(__dirname, "./keys/rsa.private")).read(),
        public: new SyncFile(Path.resolve(__dirname, "./keys/rsa.public")).read()
    };
});