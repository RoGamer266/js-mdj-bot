const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('hi')
        .setAuthor('hello')
        .setDescription('greetings')
        .setColor('#FF2D00')
        .setImage('https://cdn.discordapp.com/attachments/660266379911626786/778279846257754132/unknown.png')
        .setFooter('welcome')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: ".hi",
    accessableby: "Members",
    aliases: ['h']
}