module.exports = {
    commands: ['version', 'v'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send(`**Bot Version Number**: Alpha 3.0.0`)
    },
}