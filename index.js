const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('The Client is Ready!')

    command(client, help, (message) => {
        message.channel.send(`
        Available Commands:

        **v!help** - Displays the help menu
        **v!purge** - Clears all messages in a channel (only available to admins)
        *aliases: v!p*
        **v!version** - Shows the bot version number
        *aliases: v!v*
        `)
    })

    command(client, ['purge', 'p'], message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })

    command(client, ['version', 'v'], (message) => {
        message.channel.send(`**Bot Version Number**: Alpha 1.6.0`)
    })
})

client.login(process.env.DiscordJS_Token)