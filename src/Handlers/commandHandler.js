async function loadCommands(client) {
    const { loadFiles } = require("../Functions/fileLoader");

    console.time("Commands Loaded");

    const commands = new Array();
    let commandsArray = [];
    let guildCommandsArray = [];

    const Files = await loadFiles("src/Commands");
       Files.forEach((file) => {
        try {
            const command = require(file);
            

            if(command.subCommandGroup) {
                const map = client.subCommandsGroup.set(command.subCommand, command);
                return map.set(command.subCommandGroup, command);
            }
            if(command.subCommand) {
                return client.subCommands.set(command.subCommand, command);
            }

        
        client.commands.set(command.data.name, command);
        if(command.guild) {
            guildCommandsArray.push(command.data.toJSON())
        }else {
            commandsArray.push(command.data.toJSON());
        }
        
        
        commands.push({ Command: command.data.name, Status: "✅" });
        
    } catch (error) {
        commands.push({ Command: file.split("/").pop().slice(0, -3), Status: "🔴" });
    }
});
    client.application.commands.set(commandsArray);
    console.table(commands, ["Command", "Status"]);
    console.info("\n\x1b[36m%s\x1b[0m", "Loaded Commands.");
    console.timeEnd("Commands Loaded");
}

module.exports = { loadCommands }