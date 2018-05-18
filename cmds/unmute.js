const Discord = require("discord.js");
const prefix = "?"
const fs = require("fs");
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("`You do not have the permission MUTE_MEMBERS`");
    
              let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
              if(!toMute) return message.channel.send("`You did not specify a user mention or identification (ID)!`")
    
              let role = message.guild.roles.find(r => r.name == "Sylveon Muted");
    
                if(!role || !toMute.roles.has(role.id)) return message.channel.send("`This user is not muted!`");
                
                await toMute.removeRole(role);
                message.channel.send("`I have unmuted him/her!`");
    
                return;
          }
module.exports.help = {
    name: "unmute"
}