const { ChatInputCommandInteraction, SlashCommandBuilder, Client } = require('discord.js');

module.exports = {
    subCommand: "hkt.test",
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param { Client } client
     */
    async execute(interaction,client) {
        const message = await interaction.deferReply({
            fetchReply: true,
            ephemeral: true,
        });

        const newMessage = `prout`;
        await interaction.editReply({
            content: newMessage,
            ephemeral: true
        })
    }
}