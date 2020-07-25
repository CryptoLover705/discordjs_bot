// var
const { config } = require('dotenv'); //we will be using the process .env
const fs = require('fs');
const { Client, Collection } = require('discord.js')

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
});

// On ready event
client.once('ready', () => {
    console.log(`${client.user.username} is now online`) // This is just some logging so it will tell you when the bot is online
});

// Setting of the bot's activity status
client.on('ready', () => {
    client.user.setActivity("CryptoLoverBots", { type: "STREAMING", url: 'https://cryptoloverbots.com/index.html'})
});

client.on('message', message => {
    // If the message is "ping", The bot will reply "pong"
    if(message.content == "ping") {
        return message.channel.send('pong 🏓')
    }
});

client.login(process.env.TOKEN) // this allows us to use a .env 