const discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, you do not have enough permission to use this command`)
    }
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
        console.log('bruh fix perms idiot')
        return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command, devs notified`)
    }
    let target = message.mentions.members.first();
    if(!target) {
         return message.channel.send(`**${message.author.username}**, mention the person who you want to kick`)
    }
    if(target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, you can't kick yourself`)
    }
    if(!args[1]) {
        return message.channel.send(`**${message.author.username}**, please give a reason to kick`)
    }
    let embed = new discord.MessageEmbed()
        .setTitle("Kick in progress B)")
        .setDescription(`Kicked ${target} (${target.id})`)
        .setColor("#ff2050")
        .setFooter(`Kicked by ${message.author.username}`);

    message.channel.send(embed)
    target.kick(args[1]);
  }

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kicks someone",
  usage: "kick <@user> <reason>",
}