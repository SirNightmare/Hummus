const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {

    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `NSFW Commands!`,
        fields: [{
            name: "?boobs",
            value: "Nsfw Boobs (`Only works on a NSFW Chanel`)"
          },
          {
            name: "?dick",
            value: "Nsfw Dick (`Only works on a NSFW Chanel`)"
          },
          {
              name: "?hentai",
              value: "Nsfw Hentai (`Only works on a NSFW Chanel`)"
          },
          {
              name: "?gaysex",
              value: "Nsfw Gay sex (`Only works on a NSFW Chanel`)"
          },
                           {
              name: "?lewd",
              value: "Nsfw lewd (`Only works on a NSFW Chanel`)"
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
    name: "nsfw"
}