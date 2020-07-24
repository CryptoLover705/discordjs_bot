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

client.login(process.env.TOKEN) // this allows us to use a .env 