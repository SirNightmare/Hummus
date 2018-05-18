const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
const quiz = [
  { q: "Whos that pokemon https://pm1.narvii.com/6184/9da1a90e76d26624da16d3345e3f8d7b7e9096b3_hq.jpg", a: ["Greninja", "greninja"] },
  { q: "Whos that pokemon? https://daily.pokecommunity.com/wp-content/uploads/2016/04/whos_that_pokemon_eevee-1038x576.png ", a: ["Eevee", "eevee"] },
  { q: "Whos that pokemon? https://i.ytimg.com/vi/vGioJbsxiYk/maxresdefault.jpg", a: ["Mimikyu ", "mimikyu"] },
  { q: "Whos that pokemon? https://proxy.topixcdn.com/ipicimg/FRVBO7HFH2UH89NG-cp0x69x1920x1030-fill1200x600x", a: ["Pikachu ", "pikachu"] },
  ]
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};
module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel) return
        if (message.member.voiceChannel) {
        message.channel.send('**Whos that pokemon?**')
        const connection = await message.member.voiceChannel.join();
        const voiceChannel = message.member.voiceChannel;
        const dispatcher = connection.playStream(`http://www.wavlist.com/tv/033/poke-who.wav`);
        dispatcher.on('end', () => voiceChannel.leave());
    } else {
        message.reply('You need to join a voice channel first!');
    }
    
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('No one got the answer in time!')
                                 .setTitle(`Correct Answer(s): \`${item.a}\``)
                                 .setFooter(`Question: ${item.q}`)
                                })
  }
  }

module.exports.help = {
    name: "wtp"
}