const { ChatInputCommandInteraction } = require("discord.js");
const { devs } = require('../../../config.json');
module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command)
            return interaction.reply({
                content: 'This command is outdated.',
                ephemeral: true
             });

        if(command.developer && interaction.user.id !== devs[0])
        return interaction.reply({
        content: "This command is only available to the developer",
        ephemeral: true
    });
    const subCommand = interaction.options.getSubcommand(false);
    const subCommandGroup = interaction.options.getSubcommandGroup(false);

    if(subCommandGroup) {
        const subCommandGroupFile = client.subCommandsGroup.get(`${interaction.commandName}.${subCommandGroup}.${subCommand}`);
        
        console.log("groupfile : " + JSON.stringify(subCommandGroupFile));
        // console.log(subCommand);
        if(!subCommandGroupFile) return interaction.reply({
                    content: "This sub command group is outdated.",
                    ephemeral: true
                });
                subCommandGroupFile.execute(interaction, client, client.db);
            } else if(subCommand) {
                    const subCommandFile = client.subCommands.get(`${interaction.commandName}.${subCommand}`);
                    // console.log(`subcommandFile : ${JSON.stringify(subCommandFile)}`);
                    if(!subCommandFile) return interaction.reply({
                        content: "This sub command is outdated.",
                        ephemeral: true
                    });
                        subCommandFile.execute(interaction, client, client.db);
            } else command.execute(interaction, client, client.db);
    // if(subCommandGroup) {
    //     const subCommandGroupFile = client.subCommandsGroup.get(`${interaction.commandName}.${subCommandGroup}`);
    //     console.log("groupfile : " +subCommandGroupFile);
    //     if(!subCommandGroupFile) return interaction.reply({
    //         content: "This sub command group is outdated.",
    //         ephemeral: true
    //     });
    //     subCommandGroupFile.execute(interaction, client, client.db);
    // }
    //   else if(subCommand) {
    //         const subCommandFile = client.subCommands.get(`${interaction.commandName}.${subCommand}`);
    //         console.log(`subcommandFile : ${subCommandFile}`);
    //         if(!subCommandFile) return interaction.reply({
    //             content: "This sub command is outdated.",
    //             ephemeral: true
    //         });
    //             subCommandFile.execute(interaction, client, client.db);
    // }
    //      else command.execute(interaction, client, client.db);
}
}