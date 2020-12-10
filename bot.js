const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('g', 'g');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDU3NzU4ODM5NTA5NjE0NjA0.WyXfJA.V-6h3TwaGbUwYrelb0OZTl4IcNs');
