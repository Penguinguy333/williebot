const commando = require('discord.js-commando');

class WillieSizeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'g',
            group: 'g',
            memberName: 'g',
            description: 'g'
        });
    }

async run(message, args) {
        var roll = Math.floor(Math.random() * 3) + 1;
        if (roll == 1) {
            message.channel.send(message.author + " is smely lol");
        }
        if (roll == 2) {
            message.channel.send("https://media.discordapp.net/attachments/369924551502594048/777884744519516220/image0.gif")
        }
        if (roll == 3) {
            message.channel.send("https://media.discordapp.net/attachments/369924551502594048/777884744519516220/image0.gif")
        }

    }

}

module.exports = WillieSizeCommand;
