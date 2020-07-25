const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'links',
    description: "Returns all links",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**Official Links**
        **Website:** [https://cryptoloverbots.com](https://cryptoloverbots.com/index.html)
        **Youtube:** [https://youtube.com/CryptoLover705](https://www.youtube.com/channel/UCvGkIPSTDHvxJGVlERpjR5A)
        **Twitter:** [https://twitter.com/CryptoLover705](https://twitter.com/CryptoLover705)
        **GitHub:** [https://github.com/CryptoLover705](https://github.com/CryptoLover705)
        **Patreon:** [https://patreon.com/CryptoLover705](https://patreon.com/CryptoLover705)

        **Brave:** [Download Brave Browser](https://brave.com/uas800)
        **Crypto.com:** [Download Crypto.com](https://platinum.crypto.com/r/qg787d8xjb)`);
        await message.channel.send(embed)
    }
}