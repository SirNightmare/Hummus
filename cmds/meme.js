const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
const meme = require('memejs');
module.exports.run = async (bot, message, args) => {
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("RANDOM")
  .setImage(data.url[0])
  message.channel.send({embed});
  })};

module.exports.help = {
    name: "meme"
}