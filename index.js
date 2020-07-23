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