const commando = require('discord.js-commando');

class WillieSizeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'williesize',
            group: 'big willies',
            memberName: 'williesize',
            description: 'Shows willie size.'
        });
    }

async run(message, args) {
        var roll = Math.floor(Math.random() * 3) + 1;
        if (roll == 1) {
            message.channel.send(message.author + " has a big willie.");
        }
        if (roll == 2) {
            message.channel.send(message.author + " has a medium sized willie.")
        }
        if (roll == 3) {
            message.channel.send(message.author + " has a small willie. Haha.")
        }

    }

}

module.exports = WillieSizeCommand;
