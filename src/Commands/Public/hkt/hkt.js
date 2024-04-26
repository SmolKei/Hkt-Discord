const { SlashCommandBuilder } = require('discord.js');
// const itemNames = client.db.query(`SELECT user FROM users`, function(results) {
//     return results;
// })
module.exports = {
    data: new SlashCommandBuilder()
    .setName('hkt')
    .setDescription('hkt commands')
     .addSubcommandGroup((options) => options
        .setName("quotes")
        .setDescription("Haves quotes from users")
        .addSubcommand((options) => options
        .setName('random')
        .setDescription('Get a random Quote from user'))
        .addSubcommand((options) => options
        .setName('allquotes')
        .setDescription('Get a all Quotes from user')
        .addStringOption(options => options
            .setName("target")
            .setDescription("The user you want to list all quotes")
            .setRequired(true)
            // .addChoices(...itemNames.map(name => ({ name, value: name })))
        ))
        .addSubcommand((options) => options
        .setName('add')
        .setDescription('Add a quote from a user')
        .addStringOption(options => options
            .setName('target')
            .setDescription('The user you want to add a quote')
            .setRequired(true))
        .addStringOption(options => options
            .setName('quote')
            .setDescription('the quote to add')
            .setRequired(true)))
        // .addSubcommand((options) => options
        // .setName('allquotes')
        // .setDescription('List all quote from a user')
        // // .addStringOption(options => options
        // // .setName("User")
        // // .setDescription('All the quote from this user')
        // // .setRequired(true))
        // )
        // .addSubcommand((options) => options
        // .setDescription('Return all quotes from a user')
        // .addStringOption(option =>
        // option.setName('input')
        // .setDescription('the quotes to echo back')
        // .setRequired(true)
        // .addChoices(
        //     {name: `ii`, value: "uu"}
        // )))
        )
    .addSubcommand((options) => options
    .setName("ping")
    .setDescription("Respond client and api latency"))
    .addSubcommand((options) => options
    .setName("test")
    .setDescription("Respond test and test latency"))
}