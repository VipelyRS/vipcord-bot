const { prefix } = require('./config.json')

module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'message') {
        aliases = [aliases]
    }

    client.on('message', message => {
        const { content } = message;

        alieses.forEach(alies => {
            const command = `${prefix}${alies}`

            if (content.startsWith(`${command} `) || content === command) {
                console.log(`Running the command ${command}`)
                callback(message)
            }
        })
    })
}