const commando = require('discord.js-commando');

class WillieSizeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'yesorno',
            group: 'big willies',
            memberName: 'williesize',
            description: 'Shows willie size.'
        });
    }

async run(message, args) {
        var roll = Math.floor(Math.random() * 3) + 1;
        if (roll == 1) {
            message.channel.send("no");
        }
        if (roll == 2) {
            message.channel.send("yes")
        }
        if (roll == 3) {
            message.channel.send("you are smely")
        }

    }

}

module.exports = WillieSizeCommand;
