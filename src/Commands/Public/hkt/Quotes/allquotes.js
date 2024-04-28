// const { ChatInputCommandInteraction, Client, EmbedBuilder, Colors } = require('discord.js');

// module.exports = {
//     subCommandGroup: "hkt.quotes",
//     subCommand: "quotes.allquotes",
//     /**
//      * @param { ChatInputCommandInteraction } interaction
//      * @param { Client } client
//      */
//     async execute(interaction, client) {
//         interaction.reply({ content: 'prout'});
//     }
// }
// module.exports = {
//     subCommandGroup: "hkt.quotes",
//     subCommand: "quotes.allquotes",
//     /**
//      * @param {ChatInputCommandInteraction} interaction
//      * @param { Client } client
//      */
//     async execute(interaction, client, args) {
//         await client.db.query(`SELECT user, quote.quote FROM users INNER JOIN quote ON quote.userId WHERE user = ${args}`, function (err, result, fields) {
//             if (err) throw err;
//             return interaction.reply({
//                 embeds: [
//                     new EmbedBuilder()
//                     .setColor(Colors.Blurple)
//                     .setDescription(`${result[0].quote}`)
//                     .addFields[{
//                         name: "Author : ",
//                         value: `${result[0].user}`,
//                         inline: true,
//                     }]
//                 ]
//             })
//         })
//     //    const sql = await client.db.query(``, function (err, result, fields) {
//     //     if (err) throw err;
//     //     return interaction.reply({
//     //       embeds: [
//     //         new EmbedBuilder()
//     //         .setColor(Colors.Blurple)
//     //         .setDescription(`${result[0].quote}`)
//     //         .addFields([{
//     //           name: "Morue",
//     //           value: `\`- ${result[0].user}\``,
//     //           inline: true,
//     //         }
//     //         ])
//     //       ],
//     //       ephemeral: true
//     //     })
//     //   });
       
//     }
// }
const { ChatInputCommandInteraction, Client, EmbedBuilder, Colors } = require('discord.js');
module.exports = {
    subCommandGroup: "hkt.quotes",
    subCommand: "hkt.quotes.allquotes",
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param { Client } client
    */
   async execute(interaction, client) {
                   
    await client.db.query(`SELECT quote, quote.id FROM quote INNER JOIN users ON quote.userId = users.id WHERE user = '${interaction.options.getString('target')}'`,async function (err, results) {
            if (err) throw err;
                let quotes;
                let arr = [];
                console.log(results);
                const id = results.map(item => item.id);
                const quote = results.map(item => item.quote);
                    for (var i = 0; i < id.length; i++) {
                        for(var i = 0; i < quote.length; i++) {
                            quotes = `id : ${id[i]} - ${quote[i]}`
                            arr.push(quotes);    
                        }
                    }   
                    await interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setColor(Colors.Blurple)
                            .setDescription(`${arr.join("\n")}`)
                            .addFields([{
                            name: "Author :",
                            value: `\`- ${interaction.options.getString('target')}\``,
                            inline: true,
                        }])
                    ]
                })
        })                    
    }
}
