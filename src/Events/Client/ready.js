const { loadCommands } = require("../../Handlers/commandHandler");
const loadDatabase = require('../../Functions/dbconnect');
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log("The Client is now ready.");

        client.db = await loadDatabase();
        client.db.connect(function () {
            console.log("Database is now ready");
        })
        loadCommands(client);
    }
}