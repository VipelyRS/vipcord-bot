const { prefix } = require('../../config.json')
const { MessageEmbed, Channel, Intents } = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

module.exports = {
    commands: 'help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text, Client) => {
        const helpEmbed = new MessageEmbed()
            .setColor('#1a09db')
            .setTitle('Vipbot Help')
            .setDescription('Provides help for commands')

        Channel.send({ embeds: [helpEmbed] });
    },
};