const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('ew belgian')
        .setAuthor('you are a small man')
        .setDescription('here take some belgian chocolate')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/attachments/740902437111726172/778276206880620554/af76c90f.png')
        .setImage('https://cdn.discordapp.com/attachments/740902437111726172/778276337596891136/iu.png')
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