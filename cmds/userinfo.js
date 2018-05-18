const Discord = require("discord.js");
const prefix = "?"
module.exports.run = async (bot, message, args) => {
  message.channel.send(`<@${message.author.id}>`)
    bot.channels.get('428120520035139585').send(`${message.author.username}#${message.author.discriminator} used the ${prefix}userinfo command!`)
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `User Infomation about you [${message.author.username}#${message.author.discriminator}]`,
        fields: [{
            name: "Username",
            value: `${message.author.username}#${message.author.discriminator}`
          },
          {
            name: "Identification (ID)",
            value: message.author.id
          },
          {
            name: "Made at",
            value: `${message.author.createdAt}`
          }
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
    name: "userinfo"
}
