const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.mentions.users.size) {
          return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: ".avatar",
    accessableby: "Members",
    aliases: ['avi']
}