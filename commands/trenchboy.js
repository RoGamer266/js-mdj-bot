const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('boy of trench')
        .setAuthor('trenchboy')
        .setDescription('trenchman')
        .setColor('#FF2D00')
        .setImage('https://cdn.discordapp.com/attachments/409772467993968640/778548883441451019/trenchboy.png')
        .setFooter('man')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "trenchboy",
    description: "",
    usage: ".trenchboy",
    accessableby: "Members",
    aliases: ['ter', 'trenchman']
}