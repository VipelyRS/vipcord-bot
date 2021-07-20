const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const { prefix, token } = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('The Client is Ready!')

    command(client, 'help', (message) => {
        message.channel.send(`
        Available Commands:

        **${prefix}help** - Displays the help menu
        **${prefix}purge** - Clears all messages in a channel (only available to admins)
        **${prefix}prefix** - Changes the bot prefix
        **${prefix}serverinfo** - Displays info about the current server
        **${prefix}version** - Shows the bot version number
        *aliases: ${prefix}v*
        `)
    })

    command(client, 'purge', message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })

    command(client, 'serverinfo', message => {
        const { guild } = message

        const { name, region, memberCount, owner } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
            .setTitle(`Server Info for "${name}"`)
            .setThumbnail(icon)
            .addFields(
                {
                    name: 'Owner',
                    value: owner.user.tag,
                },
                {
                    name: 'Region',
                    value: region,
                },
                {
                    name: 'Members',
                    value: memberCount
                }
            )

            message.channel.send(embed)
    })

    command(client, ['version', 'v'], (message) => {
        message.channel.send(`**Bot Version Number**: Alpha 1.6.0`)
    })
})

client.login(process.env.DiscordJS_Token)