const { ChatInputCommandInteraction, Client, EmbedBuilder, Colors } = require('discord.js');
module.exports = {
    subCommandGroup: "hkt.quotes",
    subCommand: "hkt.quotes.random",
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param { Client } client
     */
    async execute(interaction, client) {
      await client.db.query(`SELECT quote, users.user FROM quote INNER JOIN users ON quote.userId = users.id ORDER BY RAND()`, function (err, result, fields) {
        if (err) throw err;
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
            .setColor(Colors.Blurple)
            .setDescription(`${result[0].quote}`)
            .addFields([{
              name: "Morue :",
              value: `\`- ${result[0].user}\``,
              inline: true,
            }
            ])
          ]
        })
    });
      
    }
}