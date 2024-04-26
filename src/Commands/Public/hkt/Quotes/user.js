// const { ChatInputCommandInteraction, Client } = require('discord.js');

// module.exports = {
//     subCommandGroup: "hkt.quotes",
//     subCommand: "quotes.random",
//     /**
//      * @param {ChatInputCommandInteraction} interaction
//      * @param { Client } client
//      */
//     async execute(interaction, client, db) {
//        const sql = await client.db.query(`SELECT quote, users.user FROM quote INNER JOIN users ON quote.userId = users.id ORDER BY RAND()`, function (err, result, fields) {
//         if (err) throw err;
        
//         console.log(result);
//         interaction.reply({content: ``})
//       });
       
//     }
// }