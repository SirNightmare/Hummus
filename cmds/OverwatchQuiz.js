const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
const quiz = [
  { q: "How many Overwatch characters is there?", a: ["Twenty seven", "27", "twenty seven", "twentyseven", "Twnetyseven"] },
  { q: "Name a Overwatch hero that is classed as a tank (Needs a Hight case letter at the start of the name eg. **T**racer) ", a: ["D.va", "Diva", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya"] },
  { q: "Where is tracer from?", a: ["London", "london", "england", "England"] },
  { q: "What level do you have to be to get into competitive play?", a: ["25", "Twentyfive", "twentyfive", "Twenty five", "twenty five"] },
  { q: "Name Sombra's ultimate", a: ["EMP", "emp"] },
  { q: "What is Orisa's primary weapon?", a: ["Fusion Driver"] },
  ]
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};
module.exports.run = async (bot, message, args) => {
    
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
    name: "owquiz"
}