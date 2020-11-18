const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('gay ass')
        .setAuthor('yo7ak')
        .setDescription('yo7ak')
        .setColor('#FF2D00')
        .setImage('https://cdn.discordapp.com/attachments/660266379911626786/778279846257754132/unknown.png')
        .setFooter('yo7ak')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "gay",
    description: "",
    usage: ".gay",
    accessableby: "Members",
    aliases: ['yo7ak']
}