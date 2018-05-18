const Discord = require("discord.js");
const prefix = "?"
const fs = require("fs");
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
        if(message.author.id !== "360908660727087107") return;
    try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled)

        message.channel.sendCode("x1", clean(evaled));
    } catch(err) {
        message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
    }
    function clean(text) {
        if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
      }
module.exports.help = {
    name: "eval"
}