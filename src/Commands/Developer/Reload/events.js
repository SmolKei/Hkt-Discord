const { ChatInputCommandInteraction, Client } = require("discord.js");
const { loadEvents } = require("../../../Handlers/eventHandler");
const { guildId } = require("../../../../config.json");
module.exports = {
    subCommand: "reload.events",
    guild: guildId,
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        for(const [key, value] of client.events)
        client.removeListener(`${key}`, value, true);        
            loadEvents(client);
            interaction.reply({content: "Reloaded Events", ephemeral: true});
        }
}
