const Discord = require("discord.js");
const settings = require("./settings.json");
const superagent = require('superagent')
const fs = require("fs");
let client = new Discord.Client();

var google = `<@409751964662890508>`

let bot = new Discord.Client();
bot.commands =  new Discord.Collection();
bot.mutes = require("./mutes.json");

const prefix = settings.prefix;

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!")
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`)
    bot.commands.set(props.help.name, props);
  });
});
bot.on("ready", async () => {
    console.log("Bot Ready!");
    console.log("Settings:")
    console.log(`Name: ${bot.user.username}#${bot.user.discriminator}`);
    console.log("Token: " + settings.token);
    console.log("Prefix: " + settings.prefix);
    console.log(bot.commands);
    bot.user.setActivity("some awesome tunes!", {type: "LISTENING"});
});

bot.on("message", async message => {
    if(message.content.bot) return;
  
        var cleverbot = require("cleverbot.io");
    var bot = new cleverbot('GS6xN3FmOdX3aAmg','gigAgcYDhxvpl3mRkcm9bGIT28Z00pZO');
    var session = "Sylveon DDiscord";
    bot.setNick("SylveonDiscordBot");
        if(message.content.indexOf("<@409751964662890508>")!==-1){
                    message.channel.startTyping();
            bot.ask(message.content.replace("<@409751964662890508>", ""),function (err, response) {
                message.reply(response);
              });
              message.channel.stopTyping();
            }
  
  if(message.content.startsWith("Okay " + google + ", " + "what " + "was " + "you " + "coded " + "with" + "?")) {
    message.channel.startTyping();
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `Answer:`,
        fields: [{
            name: `I was coded with JavaScript by MrNightmare_#2016`,
            value: `JavaScript`
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username}#${message.author.discriminator}`
        }
      }       
    });
    message.channel.stopTyping();
 }
  
  if (message.content.startsWith(`${settings.prefix}` + "dogs")) {
        const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Cute Doggy! :dog2:")
    .setImage(body.message)
    message.channel.send({embed})
  }
  
  if(message.content.startsWith(`${settings.prefix}` + "overwatch" + " Doomfist")) {
    var embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .addField("**Real Name**", "	Akande Ogundimu")
    .addField("**Other Names**", "The Successor")
    .addField("**Status**", "Alive")
    .addField("**Age**", "45")
    .addField("**Nationality**", "Nigerian")
    .addField("**Occupation**", "	Martial artist (formerly)")
    .addField("**Role**", "Offence")
    .addField("Health", "250")
    .addField("**Ultimate**", "Meteor Strike")
    .setImage("https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/1/15/Doomfist_Artwork.png/252px-Doomfist_Artwork.png?version=c0b05e57e84040ed5edac1e2f8231c4b")
    message.channel.send({embed})
  }
  
  if(message.content.startsWith(`${settings.prefix}` + "overwatch" + " Genji")) {
    var embed = new Discord.RichEmbed()
    .setColor(0x00FF00)
    .addField("**Real Name**", "Genji Shimada")
    .addField("**Other Names**", "	Sparrow")
    .addField("**Status**", "Alive/Dead")
    .addField("**Age**", "35")
    .addField("**Nationality**", "Japanese")
    .addField("**Occupation**", "	Adventurer")
    .addField("**Role**", "Offence")
    .addField("Health", "200")
    .addField("**Ultimate**", "Dragonblade")
    .setImage("https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/d/d8/Genji-portrait.png/322px-Genji-portrait.png?version=284e7c2c19f78860c219f62dfc178ab1")
    message.channel.send({embed})
  }
  
    if(message.content.startsWith(`${settings.prefix}` + "overwatch" + " McCree")) {
    var embed = new Discord.RichEmbed()
    .setColor(0xC0C0C0)
    .addField("**Real Name**", "Jesse McCree")
    .addField("**Other Names**", "	N/A")
    .addField("**Status**", "Alive/Dead")
    .addField("**Age**", "37")
    .addField("**Nationality**", "America")
    .addField("**Occupation**", "	Bounty Hunter")
    .addField("**Role**", "Offence")
    .addField("Health", "200")
    .addField("**Ultimate**", "Deadeye")
    .setImage("https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/d/d2/Mccree-portrait.png/264px-Mccree-portrait.png?version=000a91f377fd2d6a99ad43ed6f4bc63c")
    message.channel.send({embed})
    }            

    let messsageArray = message.content.split(" ");
    let command = messsageArray[0];
    let args = messsageArray.slice(1);

    if(!command.startsWith(settings.prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
      });
bot.login(process.env.BOT_TOKEN);
