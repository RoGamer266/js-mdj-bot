const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('ew')
        .setAuthor('you are a small man')
        .setDescription('ew belgian')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/attachments/740902437111726172/778276206880620554/af76c90f.png')
        .setImage('https://cdn.discordapp.com/attachments/660266379911626786/777810743445159936/MDJ_NOT_COOL.png')
        .setFooter('imagine being belgian')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "belgian",
    description: "belgian",
    usage: ".belgian",
    accessableby: "Members",
    aliases: ['belgium']
}