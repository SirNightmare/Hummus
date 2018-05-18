const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(`<@${message.author.id}> 🔞 Cannot display NSFW content in a SFW channel.`);
message.channel.send(`<@${message.author.id}> https://www.fannyhunter.co.uk/wp-content/uploads/2018/04/hentai-porn.jpg`);

  }

module.exports.help = {
    name: "hentai"
}