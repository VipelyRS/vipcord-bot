const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const { prefix, token } = require('./config.json')

client.on('ready', () => {
    console.log('The Client is Ready!')

    const baseFile = 'command-handeler.js'
    const commandHandeler = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandHandeler()
            }
        }
    }

    readCommands('commands')
})

client.login(process.env.DiscordJS_Token)