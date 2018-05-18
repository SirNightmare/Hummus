const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(`<@${message.author.id}> 🔞 Cannot display NSFW content in a SFW channel.`);
message.channel.send(`<@${message.author.id}> https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTMAHqeeDFw_pkHS9b6K-ttDJE_eiXDD7K9UmEHU22Du3ETI7Gw`);

  }

module.exports.help = {
    name: "gaysex"
}