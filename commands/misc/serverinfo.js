module.exports = {
    commands: 'serverinfo',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
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
    },
}