const Discord = require("discord.js");
const gifSearch = require("gif-search");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
   if (message.author.bot) return;
  if (message.channel.type == "dm") return;

    if (!args[0]) return message.channel.send("`"+prefix+"gif <gname>`");

    gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        message.channel.send(embed);
    });
  }

module.exports.help = {
    name: "gif"
}