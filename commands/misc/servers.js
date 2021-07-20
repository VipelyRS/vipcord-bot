module.exports = {
    commands: 'servers',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        client.guilds.cache.forEach((guilds) => {
            message.channel.send(`${guild.name} has a total of ${guilds.memberCount} members`)
        })
    },
}