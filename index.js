const path = require('path')
const fs = require('fs')
const { Client } = require("discord.js")
const client = new Client(32767)

const config = require('./config.json')
const { prefix, token } = require('./config.json')

client.on('ready', async () => {
    console.log('The Client is Ready!')

    const baseFile = 'command-handler.js'
    const commandHandler = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandHandler(option)
            }
        }
    }

    readCommands('commands')

    commandHandler.listen(client)
})

client.login(process.env.DiscordJS_Token)