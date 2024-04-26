const { ChatInputCommandInteraction, Client, EmbedBuilder, Colors } = require('discord.js');

module.exports = {
    subCommandGroup: "hkt.quotes",
    subCommand: "hkt.quotes.add",
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param { Client } client
    */
   async execute(interaction, client) {
    const capsUser = interaction.options.getString('target')[0].toUpperCase() + interaction.options.getString('target').slice(1);
    const capsQuote = interaction.options.getString('quote')[0].toUpperCase() + interaction.options.getString('quote').slice(1);
    new Promise(async (resolve, reject) => {
        try {
            resolve(await client.db.query(`SELECT user FROM users WHERE user = '${capsUser}'`, async function (err, results) {
                if(err) throw err;
                if (results.length == 0) {
                    await client.db.query(`INSERT INTO users (user) VALUES ('${capsUser}')`, function(err, results) {
                        if(err) throw err;
                        return results;
                    })
                }
            }))
        } catch (error) {
            reject('something went wrong') 
        }
    }).then(setTimeout( async () => {
        await client.db.query(`SELECT id FROM users WHERE user = '${capsUser}'`, async function (err, results, fields) {
             if(results) {
              await client.db.query(`INSERT INTO quote (quote, userId) VALUES ("${capsQuote}", ${results[0].id})`, async function (err, results) {

                  return results, interaction.reply({content: `${capsQuote} from user ${capsUser} added to database`})});
              }
             })

    }, '5000')
            )
}
       
   }
