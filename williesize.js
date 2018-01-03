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
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply('has a big willie.');
    }

}

module.exports = WillieSizeCommand;
