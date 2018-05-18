const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    message.delete();
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `Available Commands!`,
        fields: [{
            name: "Rule 1:",
            value: `Do NOT send sexual content in any channel! doing this will result in a mute!`
          },
          {
            name: "Rule 2:",
            value: `Respect owner and staff any disrespect will result in a mute fo a amount of time!`
          },
          {
            name: "Rule 3:",
            value: `Be nice to others!`
          },
          {
            name: "Rule 4",
            value: "Dont spam any spamming will result ina  mute!"
          },
          {
            name: "Rule 5:",
            value: "Keep ALL content PG any swareing or Non-PG will result in a ban!"
          },
          {
            name: "Rule 6:",
            value: "NO swaring any swareing will be instantly deleted and will be logged of who did it!"
          },
          {
            name: "Rule 7:",
            value: "Do not be Racist any racism will result in a ban!"
          }, 
          {
            name: "Rule 8:",
            value: "Use common sence!"
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username}#${message.author.discriminator}`
        }
      }       
    });
  }

module.exports.help = {
    name: "rules"
}