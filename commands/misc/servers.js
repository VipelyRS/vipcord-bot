const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: 'servers',
    minArgs: 0,
    maxArgs: 0,
    callback: (client, message, arguments, text) => {
        client.guilds.cache.forEach((guilds) => {
            message.channel.send(`${guild.name} has a total of ${guilds.memberCount} members`)
        })
    },
}