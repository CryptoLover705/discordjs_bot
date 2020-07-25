const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Return latency and API ping",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**Pong 🏓**
        **> Latency:** ${Date.now() - message.createdTimestamp}ms
        **> API:** ${Math.round(client.ws.ping)}ms`);
        await message.channel.send(embed)
    }
}