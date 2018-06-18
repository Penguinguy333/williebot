const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('big willies', 'Big Willies');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDU3NzU4ODM5NTA5NjE0NjA0.DgiZCQ.W2rWkBDw8G6RN89VbWcyqw4GJLs');
