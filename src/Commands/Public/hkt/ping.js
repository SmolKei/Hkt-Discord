const { ChatInputCommandInteraction, SlashCommandBuilder, Client } = require('discord.js');

module.exports = {
    subCommand: "hkt.ping",
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param { Client } client
     */
    async execute(interaction,client) {
        const message = await interaction.deferReply({
            fetchReply: true,
            ephemeral: true,
        });

        const newMessage = `API Latency: ${client.ws.ping}\n Client Ping: ${message.createdTimestamp - interaction.createdTimestamp}`;
        await interaction.editReply({
            content: newMessage,
            ephemeral: true
        })
    }
}