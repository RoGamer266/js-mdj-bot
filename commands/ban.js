const discord = require("discord.js");

module.exports.run = (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, you do not have enough permission to use this command`)
    }
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        console.log('bruh fix perms idiot')
        return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command, devs notified`)
    }
    let target = message.mentions.members.first();
    if(!target) {
         return message.channel.send(`**${message.author.username}**, mention the person who you want to ban`)
    }
    if(target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, you can't ban yourself`)
    }
    if(!args[1]) {
        return message.channel.send(`**${message.author.username}**, please give a reason to ban`)
    }
    let embed = new discord.MessageEmbed()
        .setTitle("Ban is progress B)")
        .setDescription(`Banned ${target} (${target.id})`)
        .setColor("#ff2050")
        .setFooter(`Banned by ${message.author.username}`);

    message.channel.send(embed)
    target.kick(args[1]);
  }

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kicks someone",
  usage: "kick <@user> <reason>",
}