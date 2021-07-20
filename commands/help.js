const { prefix } = require('../config.json')

module.exports = {
    commands: 'help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send(`
        Available Commands:

**${prefix}help** - Displays the help menu
**${prefix}kick <@user>** - Kicks a targeted user
**${prefix}ban <@user>** - Bans a targeted user
**${prefix}purge** - Clears all messages in a channel
**${prefix}prefix** - Changes the bot prefix
**${prefix}servers** - Shows all the servers the bot is in
**${prefix}serverinfo** - Displays info about the current server
**${prefix}version** - Shows the bot version number
*aliases: ${prefix}v*
        `)
    },
}