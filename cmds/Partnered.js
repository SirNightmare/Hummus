const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {

if(message.author.username === "MrNightmare_") {
    bot.user.setActivity("my partner MatthewJ217#3287", {type: "LISTENING"}); 
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `Changed status to Partnered`,
        fields: [{
            name: "Listening to my partner MatthewJ217#3287",
            value: `Sylveons Partner!`
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
}

module.exports.help = {
    name: "activity"
}