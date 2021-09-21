const { prefix } = require('../../config.json')
const { MessageEmbed, Channel } = require('discord.js')

module.exports = {
    commands: 'help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const helpEmbed = new MessageEmbed()
            .setColor('#1a09db')
            .setTitle('Vipbot Help')
            .setDescription('Provides help for commands')

        Channel.send({ embeds: [helpEmbed] });
    },
};