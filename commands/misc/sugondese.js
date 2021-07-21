const { prefix } = require('../../config.json')

module.exports = {
    commands: 'sugondese',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('Nuts')
    },
}