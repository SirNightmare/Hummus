const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
        if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/c/c3/Tracer_-_Cheers%2C_love%21_The_cavalry%27s_here%21.ogg`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.reply('You need to join a voice channel first!');
    }
  }

module.exports.help = {
    name: "cheerslove"
}