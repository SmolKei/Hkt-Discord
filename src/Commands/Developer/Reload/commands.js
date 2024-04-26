const { ChatInputCommandInteraction, Client } = require("discord.js");
const { loadCommands } = require("../../../Handlers/commandHandler");
const { guildId } = require("../../../../config.json");
module.exports = {
    subCommand: "reload.commands",
    guild: guildId,
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        loadCommands(client);
        interaction.reply({content: "Reloaded Commands", ephemeral: true});
    }
}