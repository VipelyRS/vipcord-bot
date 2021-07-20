module.exports = {
    commands: 'purge',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.bulkDelete()
    },
    permissions: ['ADMINITRATOR', 'MANAGE_MESSAGES'],
}