const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('big willies', 'Big Willies');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('Mzk3ODYzNDA5MTY2NTgxNzYw.DS2d9Q.cibXnVYQXcVFZdDQeLjRgYjNYA0');
