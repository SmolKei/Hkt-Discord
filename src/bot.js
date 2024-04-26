require('dotenv').config();
const {Client, IntentsBitField, Partials, Collection} = require('discord.js');
const { User, Message, GuildMember, ThreadMember } = Partials;
const { token } = process.env;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    partials: [User, Message, GuildMember, ThreadMember]
});


client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();
client.subCommandsGroup = new Collection();

const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);

client.login(token);