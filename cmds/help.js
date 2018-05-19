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
        title: `Available Commands!`,
        fields: [{
            name: "?mute (Mention or id of a user)",
            value: `Mutes the given user!-- To use this command you need the MUTE_MEMBERS Permission!`
          },
                           {
            name: "?purge (amount)",
            value: "Deletes the amount of messages provided in that channel! a role named Staff is needed to use this command!"
          },
          {
            name: "?unmute (Mention or id of a user)",
            value: `Unmutes the given user!-- To use this command you need the MUTE_MEMBERS Permission!`
          },
          {
            name: "?ban (@mention) (Reason)",
            value: "Bans the mentioned user from the server! (Need permission MANAGE_MEMBERS also you need a channel named `incidents`)"
          },
          {
            name: "?kick (@mention) (Reason)",
            value: "Kicks the mentions user from the server! (Need permission MANAGE_MEMBERS also you need a channel named `incidents`)"
          },
          {
            name: "?report (@mention) (Reason)",
            value: "Reports the mentioned user! (Need a channel named reports)"
          },
          {
            name: "?user-info (@mention)",
            value: `Sends you info about the mentioned Discord account!`
          },
                           {
            name: "?type (pokemon type) eg. ?type water",
            value: "Sends you info about the pokemon type!"
          },
                           {
            name: "?say",
            value: "Makes Sylveon say what you tell it to!"
          },
          {
            name: "?dex (Pokemon name)",
            value: "Sends you info and dex entry of the given pokemon!"
          },
          {
            name: "?ability (pokemon ability)",
            value: "Sends you info about the given pokemon ability!"
          },
          {
            name: "?move (Pokemon move name)",
            value: "Sends you info about the given pokemon ability!"
          },
          {
            name: "?convert",
            value: "Converts a mesure to a different mesurement eg. ?convert 6 km to mi   that would convert 6km to miles!"
          }, 
          {
            name: "?item (Pokemon item)",
            value: "Sends you info about the given pokemon item"
          },
          {
            name: "?music (song name or url)",
            value: "Plays the given song!"
          },
          {
            name: "?skip",
            value: "Skips the playing song!"
          },
          {
            name: "?pause",
            value: "Pauses the playing song!"
          },
          {
            name: "?resume",
            value: "Resumes the paused song"
          },
          {
            name: "?search",
            value: "Searches the top 10 results of the mentioned song!"
          },
          {
            name: "?loop",
            value: "Loops the playing song!"
          },
          {
            name: "?coins",
            value: "Shows you how many coins you have!"
          },
          {
            name: "?xp",
            value: "Shows you how much xp you have"
          },
          {
            name: "?level",
            value: "Shows you what level you are!"
          },
          {
            name: "?roll",
            value: "Rolls a 6 sided dice!"
          },
          {
            name: "?npm (NPM package name)",
            value: "Searches for the NPM package"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username}#${message.author.discriminator}`
        }
      }       
    });

    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL
      },
      title: `Available Commands!`,
      fields: [{
          name: "?nsfw",
          value: `All NSFW commands`
        },
        {
            name: "?weather (location)",
            value: "Sends weather info about the selected area!"
          },
          {
            name: "?gif (gif name)",
            value: "Sends you a gif!"
          },
          {
            name: "?status",
            value: "Sends all nerdy infomation"
          },
          {
            name: "?dogs",
            value: "Cuteness!!"
          },
          {
            name: "?translate (Language you want the text to be translated to) (text)",
            value: "Translates text to the selected language!"
          },
               {
               name: "?bunny",
                 value: "Cute!"
               },
               {
                 name: "?owquiz",
                 value: "Overwatch quiz!"
               },
                         {
            name: "?wtp",
            value: "Whos that pokemon game (You need to be in a voice channel!)"
          },
                                        {
            name: "?meme",
            value: "Memes for life!"
          },
                                                       {
            name: "?asciify",
            value: "Asciify a sentence!"
          },
                         {
            name: "?shorten <Url> <What you want it to be called>",
            value: "Shortens the given link!"
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
    name: "help"
}
