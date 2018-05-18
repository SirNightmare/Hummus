const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(`<@${message.author.id}> 🔞 Cannot display NSFW content in a SFW channel.`);
message.channel.send(`<@${message.author.id}> https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuc1fmztkBKOzpMYlG-rhvUd7hWWUf5b5wk4ZV3qO4py7gY8WUAA`);

  }

module.exports.help = {
    name: "boobs"
}