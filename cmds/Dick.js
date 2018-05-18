const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(`<@${message.author.id}> 🔞 Cannot display NSFW content in a SFW channel.`);
message.channel.send(`<@${message.author.id}> https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQPvwL4bapY1KzK4iZRHAC3XwtuZ_opg_16UnQ6-6orh1SqSFxQ`);

  }

module.exports.help = {
    name: "dick"
}