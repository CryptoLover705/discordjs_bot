// var
const { config } = require('dotenv'); //we will be using the process .env
const fs = require('fs');
const { Client, Collection } = require('discord.js')

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection(); // Collection of commands

config({
    path: __dirname + "/.env"
});

// On ready event
client.once('ready', () => {
    console.log(`${client.user.username} is now online`) // This is just some logging so it will tell you when the bot is online
});

// Getting all the commands in the commands folder that end with ".js"
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// loading the commands
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command); // setting the commands name & the command file.

    console.log(`${file} have been loaded`);
};

// Setting of the bot's activity status
client.on('ready', () => {
    client.user.setActivity("CryptoLoverBots", { type: "STREAMING", url: 'https://cryptoloverbots.com/index.html'})
});

client.on('message', async message => {
    if(message.author.bot) return; // This will disable bot DMs
    if(!message.guild) return;
    if(!message.content.startsWith(process.env.PREFIX)) return; // If our command prefix starts with
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let commandFiles = client.commands.get(cmd);
    if(!commandFiles) commandFiles = client.commands.get(cmd)

    if(commandFiles)
    commandFiles.run(client, message, args);
});

client.login(process.env.TOKEN) // this allows us to use a .env 