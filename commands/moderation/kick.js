module.exports = {
    commands: 'kick',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                message.channel.send(`${tag} That user has been kicked.`)
            } else {
                message.channel.send(`${tag} No vaild user mentioned.`)
            }
    },
    permissions: ['KICK_MEMBERS', 'ADMINITRATOR'],
}