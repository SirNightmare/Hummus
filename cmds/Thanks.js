const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
        if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/9/9a/Sombra_-_Thank_you%21.ogg`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.reply('You need to join a voice channel first!');
    }
  }

module.exports.help = {
    name: "thanks"
}